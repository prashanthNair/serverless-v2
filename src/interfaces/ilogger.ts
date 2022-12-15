export interface ILogger {
    Level?: string;
    Message: string;
    Method: string;
    Request: any;
    Header?: any;
    StatusCode: number;
    Response: any;
    Error: any;
    HttpMethod: string;
    Service: string;
    Source: string;
    Timestamp?: string;

}