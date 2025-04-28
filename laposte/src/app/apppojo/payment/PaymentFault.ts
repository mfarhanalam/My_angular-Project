import { PaymentOrderDetail } from './PaymentOrderDetail';

export class PaymentFault {
    public faultcode: string;
    public faultstring: string;
    public detail: PaymentOrderDetail;
}
