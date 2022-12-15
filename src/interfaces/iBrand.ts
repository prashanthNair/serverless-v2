import { IAddressDetails } from "./iAddressDetails";
import { IBankDetails } from "./iBank";
import { IBusinessDetails } from "./iBusinessDetails";
import { IDocuments } from "./iDocuments";
import { IProfileVerification } from "./iProfileVerification";
import { ISubscriptions } from './iSubscriptions';
import { IContactInfo } from './iContact';

export interface IBrand {
    BrandId: string;
    UserId: string;
    Domain: string;
    Category: string;
    Mobile: string;
    EmailId: string;
    Password: string;
    AddressDetails?: IAddressDetails
    BankDetails?: IBankDetails
    BusinessDetails?: IBusinessDetails
    ProfileVerification?: IProfileVerification,
    Subscriptions?: Array<ISubscriptions>,
    ContactDetails?: IContactInfo,
    Documents?: IDocuments
    ProfileScore?: number,

}