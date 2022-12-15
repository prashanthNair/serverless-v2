import { IUser } from '../interfaces/IUser';

export interface IAccountCreation extends IUser {
    Status?: string;
    UpdatedAt?: string;
    CreatedAt?: string;

}
export default class AccountCreationModel {
    constructor({ EmailId, Password, UserType, Mobile }: IUser) {
        this.EmailId = EmailId;
        this.Password = Password;
        this.UserType = UserType
        this.Mobile = Mobile
    }
    private _EmailId: string;
    public get EmailId(): string {
        return this._EmailId;
    }
    public set EmailId(value: string) {
        this._EmailId = value;
    }
    private _Password: string;
    public get Password(): string {
        return this._Password;
    }
    public set Password(value: string) {
        this._Password = value;
    }
    private _UserType: string;
    public get UserType(): string {
        return this._UserType;
    }
    public set UserType(value: string) {
        this._UserType = value;
    }

    private _Mobile: string;
    public get Mobile(): string {
        return this._Mobile;
    }
    public set Mobile(value: string) {
        this._Mobile = value;
    }

    toEntityMapping(): IAccountCreation {

        return {
            EmailId: this.EmailId,
            Password: this.Password,
            UserType: this.UserType,
            Mobile: this.Mobile,
            UpdatedAt: "",
            Status: "Active",
            CreatedAt: new Date().toLocaleString(),
        }

    }
}