
export default class Brand {

    private readonly _brandId: string;
    public get brandId(): string {
        return this._brandId;
    }
    private _category: string;
    public get category(): string {
        return this._category;
    }
    public set category(value: string) {
        this._category = value;
    }
    private _brandName: string;
    public get brandName(): string {
        return this._brandName;
    }
    public set brandName(value: string) {
        this._brandName = value;
    }
    private _mobile: number;
    public get mobile(): number {
        return this._mobile;
    }
    public set mobile(value: number) {
        this._mobile = value;
    }
    private _email: number;
    public get email(): number {
        return this._email;
    }
    public set email(value: number) {
        this._email = value;
    }
}