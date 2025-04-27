import { Category } from './Category';

export class Services {
    public id: string;
    public serviceName: string;
    public serviceNameArabic: string;
    public serviceIconUrl: string;
    public showOnMobile: Boolean;
    public showOnWeb: Boolean;
    public publishType: Boolean;
    public categoryObj: Category;
    public contentCount: number = 0;
    public gender: string;
    public feedLimit: number = 0;
    public createdDate: Date;
}
