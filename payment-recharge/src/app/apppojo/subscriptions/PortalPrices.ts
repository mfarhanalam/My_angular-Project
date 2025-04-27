import { SubscriptionPack } from './SubscriptionPack';

export class PortalPrices {
    public id: string;
    public sdpServiceId: string;
    public subscriptionPackObj: SubscriptionPack;
    public currency: string;
    public currencyArabic: string;
    public packCategoryName: string;
    public packCategoryNameArabic: string;
    public subscriptionPrice: number = 0;
    public subscriptionPriceArabic: string;
    public extraCharges: number = 0;
    public extraChargesArabic: string;
    public createdDate: Date;
}
