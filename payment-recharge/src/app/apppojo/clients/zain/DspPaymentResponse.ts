import { DspSubsData } from '../zain/DspSubsData';

export class DspPaymentResponse {
    public success: Boolean;
    public saved: Boolean;
    public message: string;
    public error_code: number = 0;
    public subscription_data: DspSubsData;
}
