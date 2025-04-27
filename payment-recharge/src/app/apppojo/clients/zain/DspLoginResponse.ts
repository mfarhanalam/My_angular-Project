import { DspCLient } from '../zain/DspCLient';

export class DspLoginResponse {
    public id: string;
    public success: Boolean;
    public message: string;
    public error_code: number = 0;
    public token: string;
    public client: DspCLient;
    public createdDate: Date;
}
