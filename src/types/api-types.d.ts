
export type Status = {
  Code: string;
  Message: string;
}
export type ResponseType = {
  statusCode: number;
  payload: any;
  error: Error;
}

export type Users = {
  EmailId: string;
  Password: string;
  UserType: string;
}

export type BusinessDetails = {
  BusinessName: string;
  BusinessType: string;
  Category: string;
  SubCategory: string;
  GSTIN: string;
  BusinessPAN: string;
  PANOwnerName: string;
  BrandName: string;
  GSTNVerification: boolean;
  WebSiteLink: string;

}

export type Address = {
  AddressLine1: string;
  AddressLine2: string;
  PinCode: string;
  City: string;
  State: string;
  Phone: string;
}


export type BankDetails = {
  BeneficiaryName: string;
  IFSCode: string;
  AccountNumber: string;
  BankName: string;
}

export type AddressDetails = {
  BillingAddress: Address;
  ShippingAddress: Address;
}


export type ProfileVerification = {
  AccountActivation: string;
  BusinessDetails: string;
  ContactDetails: string;
  AddressDetails: string;
  BankDetails: string;
  Documents: string;
}

export interface Subscriptions {
  SubscriptionsId: string;
  SubscriptionName: string;
  Period: string;
  Status: string;
}

export type ContactInfo = {
  Name: string;
  Mobile: string;
  CountryCode: string;
  EmailId: string;
  Languages: Array<string>;
}


export type Documents = {
  AadhaarFront: Document;
  AadhaarBack: Document;
  BusinessProof: Document;
  Pan: Document;
}

export type Document = {
  Url: string;
  Uploaded: boolean;
  Verified: boolean;
}

export type BrandModel = {
  BrandId: string;
  UserId: string;
  Domain: string;
  Category: string;
  Mobile: string;
  EmailId: string;
  Password: string;
  AddressDetails?: AddressDetails
  BankDetails?: BankDetails
  BusinessDetails?: BusinessDetails
  ProfileVerification?: ProfileVerification,
  Subscriptions?: Array<Subscriptions>,
  ContactDetails?: ContactInfo,
  Documents?: Documents
  ProfileScore?: number,
}

