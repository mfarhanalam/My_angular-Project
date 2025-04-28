import { PaymentErrorRoot } from '../payment/PaymentErrorRoot';
import { CustomerCharging } from '../subscriptions/CustomerCharging';

export class ChargingResponse {
    public status: number = 0;
    public message: string;
    public extravariable: string;
    public responseList: any ;
    public paymentErrorRoot: PaymentErrorRoot;
    public customerCharging: CustomerCharging;
}
