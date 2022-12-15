import { documentClient } from '../utils/config';
import { BRAND_TABLE } from '../utils/constants';
import createError from 'http-errors';

export const updateBrandInfo = async (
  request: any,
  section,
  emailId: any,
  brandId: any
) => {
  try {
    const now = new Date();
    const updateColumValue = `:${section}`
    const updateColumName = `#${section}`
    const params = {
      TableName: BRAND_TABLE,
      Key: {
        EmailId: emailId,
        BrandId: brandId,
      },
      UpdateExpression: `SET #${section} = :${section} #UpdatedAt = :UpdatedAt`,
      // 'SET #profileCompletion.#address= :completionScore, #AddressDetails = :AddressDetails, #UpdatedAt = :UpdatedAt',

      ExpressionAttributeValues: {
        ':UpdatedAt': now.toUTCString(),
      },
      ExpressionAttributeNames: {
        '#UpdatedAt': 'UpdatedAt',
      },
      ReturnValues: 'ALL_NEW',
    };

    params.ExpressionAttributeNames[updateColumValue] = request
    params.ExpressionAttributeValues[updateColumName] = request

    let strBody = JSON.stringify(request);
    console.info(`Edit addressDetails: String request - ${strBody}`);
    console.info(`Edit addressDetails - ${params}`);
    console.info(
      `Edit addressDetails Begins: Service Table - ${BRAND_TABLE}'-'${brandId}`
    );
    const res = await documentClient.update(params).promise();
    if (!res) {
      throw new createError.InternalServerError(
        'Error while updating addressDetails '
      );
    }
    console.info(
      `Response Body: ${{
        statusCode: 200,
        body: JSON.stringify(res.Attributes),
      }} Method: PATCH Action:addressDetails `
    );
    return res.Attributes;
  } catch (error: any) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
};
