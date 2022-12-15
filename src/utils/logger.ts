import { Status } from "../enums/status.enum";
import { ILogger } from "../interfaces/ilogger";

export abstract class Logger {

    public static info(loggerObject: ILogger) {
        loggerObject.Level = Status.SUCCESS
        loggerObject.Timestamp = new Date().toLocaleString()
        console.info(loggerObject)
    }
    public static warn(loggerObject: ILogger) {
        loggerObject.Level = Status.WARNING
        loggerObject.Timestamp = new Date().toLocaleString()
        console.warn(loggerObject)
    }
    public static error(loggerObject: ILogger) {
        loggerObject.Level = Status.ERROR
        loggerObject.Timestamp = new Date().toLocaleString()
        console.error(loggerObject)
    }
}