import { Customers } from './Customers';
import { FeedContent } from './FeedContent';

export class CustomerFavoriteFeeds {
    public id: string;
    public customerObj: Customers;
    public feedList: Array<FeedContent>;
}
