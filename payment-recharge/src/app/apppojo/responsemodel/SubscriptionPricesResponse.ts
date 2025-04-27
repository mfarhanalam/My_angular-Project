import { PortalPrices } from '../subscriptions/PortalPrices';
import { ServicePrices } from '../subscriptions/ServicePrices';

export class SubscriptionPricesResponse {
    public portalPrices: PortalPrices;
    public servicePrices: ServicePrices;
}
