import { BRAND_TABLE } from '../utils/constants';
import DBContext, { QueryItem } from '../utils/dataContext';
const dbContext = new DBContext();

export const getBrandDetails = async (emailId: string) => {
  try {
    const params: QueryItem = {
      TableName: BRAND_TABLE,
      KeyConditionExpression: "EmailId = :EmailId",
      ExpressionAttributeValues: {
        ":EmailId": emailId,
      },
    };
    const results = await dbContext.query(params);
    return results.Items
  }
  catch (error) {
    return error;
  }

}
