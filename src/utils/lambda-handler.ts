import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import ResponseModel from "../models/common/response";
import "source-map-support/register";

export type LambdaHandler = (
  event: APIGatewayEvent,
  context: Context
) => Promise<APIGatewayProxyResult>;

export type RequestHandler<T> = (
  body: T,
  pathParams?: PathParams,
  params?: QueryParams,
  context?: Context,
) => Promise<ResponseModel>;


export type QueryParams = Record<string, string | undefined>;
export type PathParams = Record<string, string | undefined>;

export const wrapAsRequest = <T = unknown>(
  handler: RequestHandler<T>
): LambdaHandler => {
  return async (
    event: APIGatewayEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const requestData: T = event.body ? JSON.parse(event.body) : undefined;
    const pathParams = Object.keys(event.pathParameters || {}).reduce(
      (acc, cur) => {
        acc[cur] = event.pathParameters?.[cur];
        return acc;
      },
      {}
    );
    const params = Object.keys(event.queryStringParameters || {}).reduce(
      (acc, cur) => {
        acc[cur] = event.queryStringParameters?.[cur];
        return acc;
      },
      {}
    );
    const response = await handler(requestData, pathParams, params, context);
    return response.generate();
  };
};
