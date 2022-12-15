import { IUpdateBrandInfo } from '../interfaces/iUpdateBrandInfo';
import _default from '../../swagger/functions';


export default class UpdateBrandInfoModel<T> {
    constructor({
        Session,
        Request,
        UserId
    }: IUpdateBrandInfo<T>) {
        this.Session = Session,
            this.Request = Request,
            this.UserId = UserId
    }
    private _Session: string;
    public get Session(): string {
        return this._Session;
    }
    public set Session(value: string) {
        this._Session = value;
    }
    private _Request: T;
    public get Request(): T {
        return this._Request;
    }
    public set Request(value: T) {
        this._Request = value;
    }
    private _UserId: string;
    public get UserId(): string {
        return this._UserId;
    }
    public set UserId(value: string) {
        this._UserId = value;
    }

    toEntityMapping(): IUpdateBrandInfo<T> {
        return {
            Request: this.Request,
            Session: this.Session,
            UserId: this.UserId
        }
    }
}