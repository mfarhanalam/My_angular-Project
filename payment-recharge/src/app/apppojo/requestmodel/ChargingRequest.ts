import { CustomerCharging } from '../subscriptions/CustomerCharging';
import { PaymentRefunds } from '../subscriptions/PaymentRefunds';

export class ChargingRequest {
    public userId: string;
    public extraVariable: string;
    public languageName: string;
    public message: string;
    public mobileNumber: string;
    public customerCharging: CustomerCharging;
    public paymentRefunds: PaymentRefunds;
}
