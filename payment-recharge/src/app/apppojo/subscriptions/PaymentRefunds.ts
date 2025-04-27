import { CustomerCharging } from './CustomerCharging';

export class PaymentRefunds {
    public id: string;
    public refundDate: Date;
    public customerMobileNumber: string;
    public description: string;
    public refundAmount: string;
    public refundRefence: string;
    public chargingRefence: string;
    public customerId: string;
    public refundStatus: Boolean;
    public customerCharging: CustomerCharging;
}
