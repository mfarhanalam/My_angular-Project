import { PromoCommonResponse } from './PromoCommonResponse';
import { CategoryResponse } from './CategoryResponse';
import { FeedContentResponse } from './FeedContentResponse';
import { Languages } from '../models/Languages';

export class PortalResponse {
    public promoList: Array<PromoCommonResponse>;
    public categoryList: Array<CategoryResponse>;
    public feedList: Array<FeedContentResponse>;
    public languagesList: Array<Languages>;
    public idList: Array<string>;
}
