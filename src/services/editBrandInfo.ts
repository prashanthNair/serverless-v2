import { documentClient } from "../utils/config";
import { BRAND_TABLE } from "../utils/constants";
import createError from "http-errors";

export const editBrandPersonalInfo = async (brandRequest: any) => {
  try {
    const params = {
      TableName: BRAND_TABLE,
      Key: {
        EmailId: brandRequest.EmailId,
        BrandId: brandRequest.BrandId,
      },
      ExpressionAttributeNames: {
        "#Mobile": "Mobile",
        "#brandname": "BrandName",
        "#Name": "Name",
        "#countrycode": "CountryCode",
        "#GSTN": "GSTN",
        "#Country": "Country",
        "#BrandUrl": "BrandUrl",
        "#Tags": "Tags",
        "#Website": "Website",
        "#Password": "Password",
        "#UpdatedAt": "UpdatedAt",
      },
      ExpressionAttributeValues: {
        ":Mobile": brandRequest.Mobile,
        ":BrandName": brandRequest.BrandName,
        ":Name": brandRequest.Name,
        ":CountryCode": brandRequest.CountryCode,
        ":GSTN": brandRequest.GSTN,
        ":Country": brandRequest.Country,
        ":BrandUrl": brandRequest.BrandUrl,
        ":Tags": brandRequest.Tags,
        ":Website": brandRequest.Website,
        ":Password": brandRequest.Password,
        ":UpdatedAt": brandRequest.UpdatedAt,
      },
      UpdateExpression:
        "SET #Mobile = :Mobile, #brandname = :BrandName ,#Name = :Name, #countrycode = :CountryCode, #GSTN = :GSTN,#Country = :Country, #BrandUrl = :BrandUrl, #Tags = :Tags, #Website = :Website, #Password = :Password, #UpdatedAt = :UpdatedAt",
      ReturnValues: "ALL_NEW",
    };

    let strBody = JSON.stringify(brandRequest);
    console.info(`Edit Brand Begins: String request - ${strBody}`);
    console.info(`Edit brand - ${params}`);
    console.info(
      `Edit Brand Begins: Service Table - ${BRAND_TABLE}'-'${brandRequest.BrandId}`
    );
    await documentClient.update(params).promise();

    console.info("Edit Brand Service End:", brandRequest);
  } catch (error: any) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
  return {
    statusCode: 200,
    body: brandRequest,
  };
};
