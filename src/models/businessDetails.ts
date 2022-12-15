export class BusinessDetails {
    private _BusinessName: string;
    public get BusinessName(): string {
        return this._BusinessName;
    }
    public set BusinessName(value: string) {
        this._BusinessName = value;
    }
    private _BusinessType: string;
    public get BusinessType(): string {
        return this._BusinessType;
    }
    public set BusinessType(value: string) {
        this._BusinessType = value;
    }
    private _Category: string;
    public get Category(): string {
        return this._Category;
    }
    public set Category(value: string) {
        this._Category = value;
    }
    private _SubCategory: string;
    public get SubCategory(): string {
        return this._SubCategory;
    }
    public set SubCategory(value: string) {
        this._SubCategory = value;
    }
    private _GSTIN: string;
    public get GSTIN(): string {
        return this._GSTIN;
    }
    public set GSTIN(value: string) {
        this._GSTIN = value;
    }
    private _BusinessPAN: string;
    public get BusinessPAN(): string {
        return this._BusinessPAN;
    }
    public set BusinessPAN(value: string) {
        this._BusinessPAN = value;
    }
    private _PANOwnerName: string;
    public get PANOwnerName(): string {
        return this._PANOwnerName;
    }
    public set PANOwnerName(value: string) {
        this._PANOwnerName = value;
    }
    private _BrandName: string;
    public get BrandName(): string {
        return this._BrandName;
    }
    public set BrandName(value: string) {
        this._BrandName = value;
    }
    private _GSTNVerification: boolean;
    public get GSTNVerification(): boolean {
        return this._GSTNVerification;
    }
    public set GSTNVerification(value: boolean) {
        this._GSTNVerification = value;
    }
    private _WebSiteLink: string;
    public get WebSiteLink(): string {
        return this._WebSiteLink;
    }
    public set WebSiteLink(value: string) {
        this._WebSiteLink = value;
    }
}