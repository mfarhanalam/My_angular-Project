import { CentralSearchResponse } from "../responsemodel/CentralSearchResponse";
import { LoginResponse } from "../responsemodel/LoginResponse";

export class WebAppCom {
    public respObject: any;
    public respList: any ;
    public iso: string;
    public users: LoginResponse;
    public language: string;
    public selectedCity: string;
    public recentSearch: Array<CentralSearchResponse>;
    public osType: string;
    public deviceName: string;
    public fcmToken: string;
    public oldToken: string;
    public currency: string;
    public userPosition: any;
}
