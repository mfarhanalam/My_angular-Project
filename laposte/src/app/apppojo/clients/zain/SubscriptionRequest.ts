import { PortalPrices } from '../../subscriptions/PortalPrices';

export class SubscriptionRequest {
    public mobileNumber: string;
    public customerId: string;
    public portalPrices: PortalPrices;
    public requestDate: Date;
    public pinCode: string;
    public description: string;
}
