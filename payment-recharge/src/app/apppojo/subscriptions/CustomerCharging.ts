import { PaymentErrorRoot } from '../payment/PaymentErrorRoot';

export class CustomerCharging {
    public id: string;
    public sdpServiceId: string;
    public mobileNumber: string;
    public date: string;
    public serviceName: string;
    public servicePack: string;
    public billingStatus: string;
    public refundStatus: string;
    public refundReference: string;
    public customerId: string;
    public description: string;
    public chargingAmount: string;
    public amount: number = 0;
    public extraCharges: string;
    public chargingRefence: string;
    public currency: string;
    public remarks: string;
    public subscriptionChannel: string;
    public chargingDate: Date;
    public chargingStatus: Boolean;
    public expiryDate: Date;
    public expiryDateString: string;
    public subscriptionPackId: string;
    public subscriptionPackName: string;
    public error: string;
    public errorResponse: PaymentErrorRoot;
}
