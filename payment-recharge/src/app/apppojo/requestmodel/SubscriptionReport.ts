
export class SubscriptionReport {
    public categoryList: Array<string>;
    public mobileNumber: string;
    public fromDate: Date;
    public toDate: Date;
    public offset: number = 0;
    public limit: number = 0;
}
