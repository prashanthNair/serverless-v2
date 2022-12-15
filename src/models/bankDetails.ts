
export class BankDetails {
    private _BeneficiaryName: string;
    public get BeneficiaryName(): string {
        return this._BeneficiaryName;
    }
    public set BeneficiaryName(value: string) {
        this._BeneficiaryName = value;
    }
    private _IFSCode: string;
    public get IFSCode(): string {
        return this._IFSCode;
    }
    public set IFSCode(value: string) {
        this._IFSCode = value;
    }
    private _AccountNumber: string;
    public get AccountNumber(): string {
        return this._AccountNumber;
    }
    public set AccountNumber(value: string) {
        this._AccountNumber = value;
    }
    private _BankName: string;
    public get BankName(): string {
        return this._BankName;
    }
    public set BankName(value: string) {
        this._BankName = value;
    }
}