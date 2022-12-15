import AWS from "aws-sdk";
import { ResponseMessage } from "../enums/response-message.enum";
import { StatusCode } from "../enums/status-code.enum";
import IConfig from "../interfaces/iConfig";
import ResponseModel from "../models/common/response";
import { Logger } from "./logger";

export type PutItem = AWS.DynamoDB.DocumentClient.PutItemInput;
export type PutItemOutput = AWS.DynamoDB.DocumentClient.PutItemOutput;

export type BatchWrite = AWS.DynamoDB.DocumentClient.BatchWriteItemInput;
export type BatchWriteOutput = AWS.DynamoDB.DocumentClient.BatchWriteItemOutput;

export type UpdateItem = AWS.DynamoDB.DocumentClient.UpdateItemInput;
export type UpdateItemOutput = AWS.DynamoDB.DocumentClient.UpdateItemOutput;

export type QueryItem = AWS.DynamoDB.DocumentClient.QueryInput;
export type QueryItemOutput = AWS.DynamoDB.DocumentClient.QueryOutput;

export type GetItem = AWS.DynamoDB.DocumentClient.GetItemInput;
export type GetItemOutput = AWS.DynamoDB.DocumentClient.GetItemOutput;

export type DeleteItem = AWS.DynamoDB.DocumentClient.DeleteItemInput;
export type DeleteItemOutput = AWS.DynamoDB.DocumentClient.DeleteItemOutput;

type Item = Record<string, string>;


const { MIB_STAGE, MIB_AWS_ACCESS_KEY_ID, MIB_AWS_SECRET_ACCESS_KEY } = process.env;
const config: IConfig = {
    region: "ap-south-1",
};
config.accessKeyId = MIB_AWS_ACCESS_KEY_ID;
config.secretAccessKey = MIB_AWS_SECRET_ACCESS_KEY;

if (MIB_STAGE === "local") {
    config.accessKeyId = "AKIAZYADTUF3XHS2LXFY";
    config.secretAccessKey = "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";
    config.endpoint = "http://localhost:8008";
    AWS.config.update(config);
    console.log("dynamodb-local mode", config);
} else {
    console.log("running dynamodb on aws on", MIB_STAGE);
}
AWS.config.update(config);

const documentClient = new AWS.DynamoDB.DocumentClient();

export default class DBContext {
    getItem = async ({
        key,
        hash,
        hashValue,
        tableName,
    }: Item): Promise<GetItemOutput> => {
        const params = {
            TableName: tableName,
            Key: {
                id: key,
            },
        };
        if (hash) {
            params.Key[hash] = hashValue;
        }
        const results = await this.get(params);
        if (Object.keys(results).length) {
            return results;
        }
        console.log("item does not exist");
        throw new ResponseModel(
            { id: key },
            StatusCode.NOT_FOUND,
            ResponseMessage.GET_ITEM_ERROR
        );
    };

    existsItem = async ({
        key,
        hash,
        hashValue,
        tableName,
    }: Item): Promise<boolean> => {
        try {
            await this.getItem({ key, hash, hashValue, tableName });
            return true;
        } catch (e) {
            if (e instanceof ResponseModel) {
                return e.code !== StatusCode.NOT_FOUND;
            } else {
                throw e;
            }
        }
    };

    create = async (params: PutItem, service = "", source = ""): Promise<PutItemOutput> => {
        try {
            const response = await documentClient.put(params).promise();
            Logger.info({ Message: "Create Method Response", Request: params, Method: "PUT", Response: response, Error: null, HttpMethod: "PUT", Service: service, Source: source, StatusCode: StatusCode.CREATED })
            return response
        } catch (error) {
            console.error("create-error", error);
            Logger.info({ Message: "Create Error", Request: params, Method: "BatchWrite", Response: null, Error: error, HttpMethod: "PUT", Service: service, Source: source, StatusCode: StatusCode.ERROR })

            throw new ResponseModel({}, StatusCode.ERROR, `create-error: ${error}`);
        }
    };

    batchCreate = async (params: BatchWrite, service = "", source = ""): Promise<BatchWriteOutput> => {
        try {
            const response = await documentClient.batchWrite(params).promise();
            Logger.info({ Message: "BatchWrite Response", Request: params, Method: "BatchWrite", Response: response, Error: null, HttpMethod: "PUT", Service: service, Source: source, StatusCode: StatusCode.CREATED })
            return response

        } catch (error) {
            Logger.info({ Message: "BatchWrite Response", Request: params, Method: "BatchWrite", Response: null, Error: error, HttpMethod: "PUT", Service: service, Source: source, StatusCode: StatusCode.ERROR })

            throw new ResponseModel(
                {},
                StatusCode.ERROR,
                `batch-write-error: ${error}`
            );
        }
    };

    update = async (params: UpdateItem): Promise<UpdateItemOutput> => {
        try {
            return await documentClient.update(params).promise();
        } catch (error) {
            throw new ResponseModel({}, StatusCode.ERROR, `update-error: ${error}`);
        }
    };

    query = async (params: QueryItem, service = "", source = ""): Promise<QueryItemOutput> => {
        try {
            Logger.info({ Message: "Query Request", Request: params, Method: "Query", Response: null, Error: null, HttpMethod: "GET", Service: service, Source: source, StatusCode: StatusCode.OK })

            const response = await documentClient.query(params).promise();

            Logger.info({ Message: "Query Response", Request: params, Method: "Query", Response: JSON.stringify(response?.Items), Error: null, HttpMethod: "GET", Service: service, Source: source, StatusCode: StatusCode.OK })

            return response;
        } catch (error) {
            Logger.error({ Message: "Query Response", Request: params, Method: "Query", Response: null, Error: error, HttpMethod: "GET", Service: service, Source: source, StatusCode: StatusCode.ERROR })

            throw new ResponseModel({}, StatusCode.ERROR, `query-error: ${error}`);
        }
    };

    get = async (params: GetItem): Promise<GetItemOutput> => {
        try {
            return await documentClient.get(params).promise();
        } catch (error) {
            throw new ResponseModel({}, StatusCode.ERROR, `get-error: ${error}`);
        }
    };

    delete = async (params: DeleteItem): Promise<DeleteItemOutput> => {
        try {
            return await documentClient.delete(params).promise();
        } catch (error) {
            throw new ResponseModel({}, StatusCode.ERROR, `delete-error: ${error}`);
        }
    };
}
