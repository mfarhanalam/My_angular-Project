import { Services } from './Services';
import { Category } from './Category';
import { Languages } from './Languages';
import { FeedContent } from './FeedContent';
import { Roles } from './Roles';
import { Status } from './Status';

export class MasterObjects {
    public servicess: Services;
    public categorys: Category;
    public languagess: Languages;
    public feedContents: FeedContent;
    public servicesLists: Array<Services>;
    public categoryList: Array<Category>;
    public roless: Roles;
    public statuss: Status;
}
