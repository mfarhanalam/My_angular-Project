import { DspStatusData } from '../zain/DspStatusData';

export class DspSubsStatus {
    public error_code: number = 0;
    public message: string;
    public success: Boolean;
    public subscription_data: DspStatusData;
}
