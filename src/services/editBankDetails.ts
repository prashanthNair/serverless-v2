import { documentClient } from '../utils/config';
import { BRAND_TABLE } from '../utils/constants';
import createError from 'http-errors';

export const editBankDetails = async (
  bankDetails: any,
  emailId: any,
  brandId: any
) => {
  try {
    const now = new Date();
    const params = {
      TableName: BRAND_TABLE,
      Key: {
        EmailId: emailId,
        BrandId: brandId,
      },
      UpdateExpression:
        'SET #profileCompletion.#bank= :completionScore, #BankDetails = :BankDetails, #UpdatedAt = :UpdatedAt',
      ExpressionAttributeValues: {
        ':BankDetails': bankDetails,
        ':UpdatedAt': now.toUTCString(),
        ':completionScore': 'Completed',
      },
      ExpressionAttributeNames: {
        '#BankDetails': 'BankDetails',
        '#profileCompletion': 'ProfileCompletion',
        '#bank': 'BankDetails',
        '#UpdatedAt': 'UpdatedAt',
      },
      ReturnValues: 'ALL_NEW',
    };

    let strBody = JSON.stringify(bankDetails);
    console.info(`Edit bankDetails: String request - ${strBody}`);
    console.info(`Edit bankDetails - ${params}`);
    console.info(
      `Edit bankDetails Begins: Service Table - ${BRAND_TABLE}'-'${brandId}`
    );
    const res = await documentClient.update(params).promise();
    if (!res) {
      throw new createError.InternalServerError(
        'Error while updating Bank details '
      );
    }
    console.info(
      `Response Body: ${{
        statusCode: 200,
        body: JSON.stringify(res.Attributes),
      }} Method: PATCH Action:bankDetails `
    );
    return res.Attributes;
  } catch (error: any) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
};
