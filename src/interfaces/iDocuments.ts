
export interface IDocuments {
    AadhaarFront: IDocument;
    AadhaarBack: IDocument;
    BusinessProof: IDocument;
    Pan: IDocument;
}

export interface IDocument {
    Url: string;
    Uploaded: boolean;
    Verified: boolean;
}