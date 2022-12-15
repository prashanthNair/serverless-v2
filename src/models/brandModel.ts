import { IAddressDetails } from '../interfaces/iAddressDetails';
import { IBankDetails } from '../interfaces/iBank';
import { IBrand } from '../interfaces/iBrand';
import { IBusinessDetails } from '../interfaces/iBusinessDetails';
import { IContactInfo } from '../interfaces/iContact';
import { IDocuments } from '../interfaces/iDocuments';
import { IProfileVerification } from '../interfaces/iProfileVerification';
import { ISubscriptions } from '../interfaces/iSubscriptions';

export interface IRegisterBrand extends IBrand {
  Status?: string;
  CreatedAt: string;
  UpdatedAt: string;
}
export class BrandModel {

  constructor({
    BrandId = `B${new Date().getTime()}`,
    UserId,
    Domain,
    Category,
    Mobile,
    EmailId,
    Status,
    CreatedAt = new Date().toLocaleString(),
    UpdatedAt,
    AddressDetails,
    BankDetails,
    BusinessDetails,
    Documents,
    ProfileVerification,
    ProfileScore,
    Subscriptions,
    ContactDetails

  }: IRegisterBrand) {
    this.BrandId = BrandId,
      this.Document = Documents
    this.Category = Category || "",
      this.UserId = UserId || "",
      this.Domain = Domain || "",
      this.Mobile = Mobile || "",
      this.EmailId = EmailId || "",
      this.AddressDetails = AddressDetails
    this.BankDetails = BankDetails
    this.BusinessDetails = BusinessDetails
    this.#ContactDetails = ContactDetails,
      this.ProfileScore = ProfileScore || 0,
      this.ProfileVerification = ProfileVerification
    this.Subscriptions = Subscriptions,
      this.Status = Status || "",
      this.CreatedAt = CreatedAt,
      this.UpdatedAt = UpdatedAt
  }

  #BrandId: string;
  public get BrandId(): string {
    return this.#BrandId;
  }
  public set BrandId(value: string) {
    this.#BrandId = value;
  }
  #UserId: string;
  public get UserId(): string {
    return this.#UserId;
  }
  public set UserId(value: string) {
    this.#UserId = value;
  }
  #Domain: string;
  public get Domain(): string {
    return this.#Domain;
  }
  public set Domain(value: string) {
    this.#Domain = value;
  }
  #Category: string;
  public get Category(): string {
    return this.#Category;
  }
  public set Category(value: string) {
    this.#Category = value;
  }
  #Mobile: string;
  public get Mobile(): string {
    return this.#Mobile;
  }
  public set Mobile(value: string) {
    this.#Mobile = value;
  }
  #EmailId: string;
  public get EmailId(): string {
    return this.#EmailId;
  }
  public set EmailId(value: string) {
    this.#EmailId = value;
  }
  #Status: string;
  public get Status(): string {
    return this.#Status;
  }
  public set Status(value: string) {
    this.#Status = value;
  }
  #CreatedAt: string;
  public get CreatedAt(): string {
    return this.#CreatedAt;
  }
  public set CreatedAt(value: string) {
    this.#CreatedAt = value;
  }
  #UpdatedAt: string;
  public get UpdatedAt(): string {
    return this.#UpdatedAt;
  }
  public set UpdatedAt(value: string) {
    this.#UpdatedAt = value;
  }
  #ProfileLogUrl: string;
  public get ProfileLogUrl(): string {
    return this.#ProfileLogUrl;
  }
  public set ProfileLogUrl(value: string) {
    this.#ProfileLogUrl = value;
  }
  #Tags: Array<string>;
  public get Tags(): Array<string> {
    return this.#Tags;
  }
  public set Tags(value: Array<string>) {
    this.#Tags = value;
  }
  #AddressDetails: IAddressDetails;
  public get AddressDetails(): IAddressDetails {
    return this.#AddressDetails;
  }
  public set AddressDetails(value: IAddressDetails) {
    this.#AddressDetails = value;
  }
  #BankDetails: IBankDetails;
  public get BankDetails(): IBankDetails {
    return this.#BankDetails;
  }
  public set BankDetails(value: IBankDetails) {
    this.#BankDetails = value;
  }
  #Subscriptions: Array<ISubscriptions>;
  public get Subscriptions(): Array<ISubscriptions> {
    return this.#Subscriptions;
  }
  public set Subscriptions(value: Array<ISubscriptions>) {
    this.#Subscriptions = value;
  }
  #ContactDetails: IContactInfo;
  public get ContactDetails(): IContactInfo {
    return this.#ContactDetails;
  }
  public set ContactDetails(value: IContactInfo) {
    this.#ContactDetails = value;
  }
  #BusinessDetails: IBusinessDetails;
  public get BusinessDetails(): IBusinessDetails {
    return this.#BusinessDetails;
  }
  public set BusinessDetails(value: IBusinessDetails) {
    this.#BusinessDetails = value;
  }
  #Document: IDocuments;
  public get Document(): IDocuments {
    return this.#Document;
  }
  public set Document(value: IDocuments) {
    this.#Document = value;
  }

  #ProfileVerification: IProfileVerification;
  public get ProfileVerification(): IProfileVerification {
    return this.#ProfileVerification;
  }
  public set ProfileVerification(value: IProfileVerification) {
    this.#ProfileVerification = value;
  }

  #ProfileScore: number;
  public get ProfileScore(): number {
    return this.#ProfileScore;
  }
  public set ProfileScore(value: number) {
    this.#ProfileScore = value;
  }

  #Password: string
  public get Password(): string {
    return this.#Password
  }
  public set Password(value: string) {
    this.#Password = value;
  }

  toEntityMapping(): IRegisterBrand {
    return {
      BrandId: this.BrandId,
      Category: this.Category,
      Password: this.Password,
      CreatedAt: new Date().toLocaleString(),
      UserId: this.UserId,
      Domain: this.Domain,
      EmailId: this.EmailId,
      Mobile: this.Mobile,
      AddressDetails: this.AddressDetails,
      BankDetails: this.BankDetails,
      BusinessDetails: this.BusinessDetails,
      ProfileVerification: this.ProfileVerification,
      ProfileScore: this.ProfileScore,
      Subscriptions: this.Subscriptions,
      ContactDetails: this.ContactDetails,
      Documents: this.Document,
      Status: this.Status,
      UpdatedAt: this.UpdatedAt
    };
  }
}






export class DocumentModel {
  BrandId: string;
  AadhaarFront: {
    Url: string;
    Uploaded: boolean;
    Verified: boolean;
  };
  AadhaarBack: {
    Url: string;
    Uploaded: boolean;
    Verified: boolean;
  };
  BusinessProof: {
    Url: string;
    Uploaded: boolean;
    Verified: boolean;
  };
  Pan: {
    Url: string;
    Uploaded: boolean;
    Verified: boolean;
  };

}

