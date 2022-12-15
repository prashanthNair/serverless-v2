import axios from 'axios';
import { IAccountCreation } from '../models/accountCreation';
import { documentClient } from './config';
import { BASE_URL, UsersTable } from './constants';
export const SetAsync = () => { };

export const GetAsync = async () => {
    const url = getUrl();
    const result = await axios.get(url);
    return result.data;
};

export const PostUserAsync = async (request: IAccountCreation) => {
    const url = getUrl();
    // const headers = createHeader(req.header);// Will be removed once CORS for custom header issue fixed
    // const headers = {
    //     'X-MIBAPI-Token': 'test',
    //     'X-MIBAPI-CustomerID': '1545',
    //     'X-MIBAPI-CustomerType': 'Brand',
    //     'X-MIBAPI-Source': 'Brand',
    //     'X-MIBAPI-Trace-Id': 'hdfsrdsfudsgdshgd6454ds8d84d',
    // };
    try {
        console.log('Create User: Request:', {
            message: 'Request received',
            url: url,
            request: request,
        });
        const response = await axios.post(url, request);
        console.log('Create User: response:', {
            message: 'Response received',
            url: response.config.url,
            data: response.data,
            status: response.status,
        });
        return response?.data?.payload;
    } catch (err) {
        console.error(`Error ${err}`);
    }
};

const getUrl = () => {
    const url = `${BASE_URL}/register`;
    return url;
};

export const getUserByEmailID = async (emailID: any) => {
    const params = {
        TableName: UsersTable,
        Key: {
            EmailId: emailID,
        },
        ConsistentRead: true,
        ReturnConsumedCapacity: 'TOTAL',
    };

    try {
        const results: any = await documentClient.get(params).promise();
        console.log('Result', results);
        if (!results.Item) {
            throw { Respone: 'User not found' };
        }
        console.log('data', JSON.stringify(results.Item, null, 2));
        return results.Item;
    } catch (error: any) {
        console.error(error);
        return error;
        // throw new createError.InternalServerError(error);
    }
};

// const createHeader = (req) => {
//   return {
//     'X-MIBAPI-Token': req.Token,
//     'X-MIBAPI-CustomerID': req.CustomerID,
//     'X-MIBAPI-CustomerType': req.CustomerType,
//     'X-MIBAPI-Source': req.Source,
//     'X-MIBAPI-Trace-Id': req.TraceID,
//   };
// };

