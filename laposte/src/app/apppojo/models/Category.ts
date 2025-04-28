
export class Category {
    public id: string;
    public categoryName: string;
    public arabicCategoryName: string;
    public description: string;
    public arabicDescription: string;
    public categoryIconUrl: string;
    public imageUrl: string;
    public serviceCount: number = 0;
    public showOnMobile: Boolean;
    public showOnWeb: Boolean;
    public createdDate: Date;
}
