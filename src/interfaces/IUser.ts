export interface IUser {
    EmailId: string;
    Password: string;
    UserType: string;
    Mobile: string;
}

export interface IUserResponse {
    EmailId: string;
    UserId: string;
    UserType?: string;
}