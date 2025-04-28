
export class ServiceSubscription {
    public id: string;
    public serviceId: string;
    public serviceName: string;
    public categoryId: string;
    public categoryName: string;
    public languaId: string;
    public languaName: string;
    public subscriptionPackId: string;
    public subscriptionPackName: string;
    public sdpServiceId: string;
    public subscriptionPrice: string;
    public extraCharges: string;
    public totalAmount: string;
    public chargingReference: string;
    public customerId: string;
    public customerMobileNumber: string;
    public isAutoRenewable: Boolean;
    public isExpired: Boolean;
    public subscriptionDate: Date;
    public expiryDate: Date;
}
