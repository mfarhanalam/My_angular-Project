import { FeedContentResponse } from "../responsemodel/FeedContentResponse";
import { FeedContent } from "./FeedContent";

export class CustomerFeedBack {
    public id: string;
    public mobileNumber: string;
    public feedback: string;
    public operator: string;
    public contentId: string;
    public updateDate: Date;
    public createdDate: Date;
}