import { ImageRequest } from './ImageRequest';

export class RequestModel {
    public userId: string;
    public mobileNumber: string;
    public lang: string;
    public searchKey: string;
    public extraVariable: string;
    public otherVariable: string;
    public reqObject: any;
    public reqList: any ;
    public imageObj: ImageRequest;
    public imageObj2: ImageRequest;
    public userType: any;
    public reqArray: any;
    public offset: number = 0;
    public limit: number = 0;
    public latitude: number = 0;
    public longitude: number = 0;
    public dateiseReport: Boolean;
    public authToken: string;
    public role: any;
    public idVariable: number = 0;
    public videoObj: any;
    public docObj: any;
    public stringList: any;
}
