
export class ServiceReportResponse {
    public languageName: string;
    public serviceName: string;
    public customerName: string;
    public emailId: string;
    public customerMobileNumber: string;
    public subscriptionPack: string;
    public servicePrice: number = 0;
    public autoRenewable: Boolean;
    public subscriptionDate: string;
    public expiryDate: string;
}
