import { POST_PRODUCT_CONSTRAINTS } from "../constraints/index";
import { ResponseMessage } from "../enums/response-message.enum";
import { StatusCode } from "../enums/status-code.enum";
import AccountCreation from "../models/accountCreation";
import { BrandModel, IRegisterBrand } from '../models/brandModel';
import ResponseModel from "../models/common/response";
import { postBrandRegister } from '../services/postBrandRegister';
import { PostUserAsync } from "../utils/httpClient";
import { wrapAsRequest } from "../utils/lambda-handler";
import { validateRequest } from "../utils/validator";

const post = async (
    body: IRegisterBrand,
): Promise<ResponseModel> => {
    try {
        await validateRequest(body, POST_PRODUCT_CONSTRAINTS);

        const user = new AccountCreation({
            EmailId: body.EmailId,
            Password: body.Password,
            UserType: "Brand",
            Mobile: body.Mobile
        });
        const userRequest = user.toEntityMapping()
        const userResponse = await PostUserAsync(userRequest)
        console.log("User Response", userResponse)
        if (!userResponse || !userResponse.UserId) {
            return new ResponseModel({}, StatusCode.ERROR, ResponseMessage.CREATE_USER_FAILED);
        }
        const brandModel = new BrandModel(body);
        brandModel.UserId = userResponse.UserId
        const request = brandModel.toEntityMapping()
        request.UserId = userResponse.UserId
        const data = await postBrandRegister(request)
        return new ResponseModel(
            data,
            StatusCode.OK,
            ResponseMessage.SUCCESS
        );
    } catch (error: any) {
        return error instanceof ResponseModel
            ? error
            : new ResponseModel({}, StatusCode.ERROR, ResponseMessage.GET_ITEM_ERROR);
    }
}

export const handler = wrapAsRequest(post)