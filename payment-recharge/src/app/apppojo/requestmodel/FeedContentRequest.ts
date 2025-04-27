import { Services } from '../models/Services';

export class FeedContentRequest {
    public englishtitles: string;
    public arabicsTitles: string;
    public englishshortDescription: string;
    public arabicsShortDescription: string;
    public arabiccontent0: string;
    public arabiccontent1: string;
    public arabiccontent2: string;
    public englishcontent0: string;
    public englishcontent1: string;
    public englishcontent2: string;
    public imageUrl: string;
    public servicesObj: Services;
}
