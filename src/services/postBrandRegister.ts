import { BRAND_TABLE } from '../utils/constants';
import DBContext, { PutItem } from '../utils/dataContext';
const dbContext = new DBContext();

export const postBrandRegister = async (request) => {
    try {
        const params: PutItem = {
            TableName: BRAND_TABLE,
            Item: request,
            ReturnValues: "ALL_OLD",
            ConditionExpression: 'attribute_not_exists(PK)'

        };
        const results = await dbContext.create(params);
        return results
    }
    catch (error) {
        return error;
    }
}

