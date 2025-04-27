import { Services } from './Services';
import { Status } from './Status';

export class FeedContent {
    public id: string;
    public title: string;
    public arabicTitle: string;
    public shortDescription: string;
    public arabicShortDescription: string;
    public description: string;
    public descriptionArabic: string;
    public likeCounts: number;
    public contentList: Array<string>;
    public arabicContentList: Array<string>;
    public imageUrl: string;
    public serviceObj: Services;
    public createdById: string;
    public createdDate: Date;
    public publishDate: Date;
    public statusObj: Status;
    public modifiedDate: Date;
}
