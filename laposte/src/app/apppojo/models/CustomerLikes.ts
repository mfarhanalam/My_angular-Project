import { FeedContent } from "./FeedContent";

export class CustomerLikes {
    public id: string;
    public mobileNumber: string;
    public isLiked: boolean = false;
    public likeCount: number = 0;
    public operator: string;
    public contentId: string;
    public billingPeriod: string;
    public updateDate: Date;
    public date: string;
    public createdDate: Date;
}