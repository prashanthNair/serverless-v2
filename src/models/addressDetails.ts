
export class AddressDetails {
    private _BillingAddress: Address;
    public get BillingAddress(): Address {
        return this._BillingAddress;
    }
    public set BillingAddress(value: Address) {
        this._BillingAddress = value;
    }
    private _ShippingAddress: Address;
    public get ShippingAddress(): Address {
        return this._ShippingAddress;
    }
    public set ShippingAddress(value: Address) {
        this._ShippingAddress = value;
    }
    private _Logo: any;
    public get Logo(): any {
        return this._Logo;
    }
    public set Logo(value: any) {
        this._Logo = value;
    }
    private _Signature: any;
    public get Signature(): any {
        return this._Signature;
    }
    public set Signature(value: any) {
        this._Signature = value;
    }
}

export class Address {
    AddressLine1: string;
    AddressLine2: string;
    PinCode: string;
    City: string;
    State: string;
    Phone: string;
}