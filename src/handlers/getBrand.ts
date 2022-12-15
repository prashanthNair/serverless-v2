import { DETAILS_PROFILE_CONSTRAINTS } from "../constraints";
import { ResponseMessage } from "../enums/response-message.enum";
import { StatusCode } from "../enums/status-code.enum";
import ResponseModel from "../models/common/response";
import { getBrandDetails } from "../services/getBrandDetails";
import { PathParams, wrapAsRequest } from '../utils/lambda-handler';
import { validateRequest } from "../utils/validator";

const details = async (
    _body: never,
    pathParams: PathParams
): Promise<ResponseModel> => {
    try {
        const { emailId } = pathParams;
        const request = {
            emailId
        }
        await validateRequest(request, DETAILS_PROFILE_CONSTRAINTS);
        const data = await getBrandDetails(emailId)
        return new ResponseModel(
            data ?? [0],
            StatusCode.OK,
            ResponseMessage.SUCCESS
        );
    } catch (error: any) {
        return error instanceof ResponseModel
            ? error
            : new ResponseModel({}, StatusCode.ERROR, ResponseMessage.GET_ITEM_ERROR);
    }
}

export const handler = wrapAsRequest(details)