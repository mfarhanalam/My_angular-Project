import { PromotionalServices } from '../models/PromotionalServices';
import { Services } from '../models/Services';
import { ServiceWiseContent } from './ServiceWiseContent';
import { Languages } from '../models/Languages';
import { PromoCommonResponse } from './PromoCommonResponse';
import { CategoryResponse } from './CategoryResponse';
import { FeedContentResponse } from './FeedContentResponse';

export class HomeResponse {
    public bannerList: Array<PromotionalServices>;
    public serviceLists: Array<Services>;
    public serviceContent: Array<ServiceWiseContent>;
    public languagesList: Array<Languages>;
    public promoList: Array<PromoCommonResponse>;
    public categoryList: Array<CategoryResponse>;
    public contentList: Array<FeedContentResponse>;
    public languageList: Array<Languages>;
}
