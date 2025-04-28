import { Services } from '../models/Services';
import { Category } from '../models/Category';

export class SubscriptionReport {
    public servicesList: Array<Services>;
    public categoryList: Array<Category>;
    public subscriptionPackName: string;
    public subscriptionType: string;
    public fromDate: Date;
    public toDate: Date;
}
