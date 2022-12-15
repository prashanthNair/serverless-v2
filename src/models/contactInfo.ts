export class ContactInfo {
    #_Name: string;
    public get Name(): string {
        return this.#_Name;
    }
    public set Name(value: string) {
        this.#_Name = value;
    }
    #_Mobile: string;
    public get Mobile(): string {
        return this.#_Mobile;
    }
    public set Mobile(value: string) {
        this.#_Mobile = value;
    }
    #_CountryCode: string;
    public get CountryCode(): string {
        return this.#_CountryCode;
    }
    public set CountryCode(value: string) {
        this.#_CountryCode = value;
    }
    #_EmailId: string;
    public get EmailId(): string {
        return this.#_EmailId;
    }
    public set EmailId(value: string) {
        this.#_EmailId = value;
    }
    #_Languages: Array<string>;
    public get Languages(): Array<string> {
        return this.#_Languages;
    }
    public set Languages(value: Array<string>) {
        this.#_Languages = value;
    }
}