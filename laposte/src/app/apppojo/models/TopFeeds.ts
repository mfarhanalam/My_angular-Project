import { FeedContent } from './FeedContent';
import { Services } from './Services';

export class TopFeeds {
    public id: string;
    public feedcontentObj: FeedContent;
    public serviceObj: Services;
    public updated: Boolean;
    public createdDate: Date;
    public modifiedDate: Date;
}
