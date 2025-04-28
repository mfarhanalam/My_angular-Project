import { SubscriptionPack } from './SubscriptionPack';
import { Services } from '../models/Services';

export class ServicePrices {
    public id: string;
    public subscriptionPack: SubscriptionPack;
    public serviceObj: Services;
    public sdpServiceId: string;
    public extraCharges: number = 0;
    public subscriptionPrice: number = 0;
    public createdDate: Date;
}
