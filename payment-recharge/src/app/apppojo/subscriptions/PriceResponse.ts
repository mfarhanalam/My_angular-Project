import { CategoryPrices } from './CategoryPrices';
import { PortalPrices } from './PortalPrices';
import { ServicePrices } from './ServicePrices';

export class PriceResponse {
    public categoryPricesObj: CategoryPrices;
    public portalPricesObj: PortalPrices;
    public servicePricesObj: ServicePrices;
    public isServicePrice: Boolean;
    public isCategoryPrice: Boolean;
    public isPortalPrice: Boolean;
}
