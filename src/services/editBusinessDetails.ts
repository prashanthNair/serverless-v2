import { documentClient } from '../utils/config';
import { BRAND_TABLE } from '../utils/constants';
import createError from 'http-errors';

export const editBusinessDetails = async (
  businessDetails: any,
  emailId,
  brandId
) => {
  try {
    const now = new Date();
    const params = {
      TableName: BRAND_TABLE,
      Key: {
        EmailId: emailId,
        BrandId: brandId,
      },
      ExpressionAttributeNames: {
        '#BusinessDetails': 'BusinessDetails',
        '#UpdatedAt': 'UpdatedAt',
        '#profileCompletion': 'ProfileCompletion',
        '#contact': 'BusinessDetails',
      },
      ExpressionAttributeValues: {
        ':completionScore': 'Completed',
        ':BusinessDetails': businessDetails,
        ':UpdatedAt': now.toUTCString(),
      },
      UpdateExpression:
        'SET  #profileCompletion.#contact= :completionScore, #BusinessDetails = :BusinessDetails, #UpdatedAt = :UpdatedAt',
      ReturnValues: 'ALL_NEW',
    };

    let strBody = JSON.stringify(businessDetails);
    console.info(`Edit Brand Begins: String request - ${strBody}`);
    console.info(`Edit brand - ${params}`);
    console.info(
      `Edit Brand Begins: Service Table - ${BRAND_TABLE}'-'${emailId}`
    );
    const res = await documentClient.update(params).promise();
    if (!res) {
      throw new createError.InternalServerError(
        'Error while updating Business details'
      );
    }
    console.info(
      `Response Body: ${{
        statusCode: 200,
        body: JSON.stringify(res.Attributes),
      }} Method: POST Action:GetBrand `
    );
    return res.Attributes;
  } catch (error: any) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
};
