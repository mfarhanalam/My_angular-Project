import { SubscriptionPack } from './SubscriptionPack';
import { Category } from '../models/Category';

export class CategoryPrices {
    public id: string;
    public subscriptionPackObj: SubscriptionPack;
    public categoryObj: Category;
    public sdpServiceId: string;
    public extraCharges: number = 0;
    public subscriptionPrice: number = 0;
    public createdDate: Date;
}
