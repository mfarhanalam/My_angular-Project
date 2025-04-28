import { Service } from "./Service";

export class SubService {
    public id: string;
    public serviceId: string;
    public name: string;
    public frenchName: string;
    public subserviceImage: string;
    public description: string;
    public frenchDescription: string;
    public serviceType: string; // Can be Tax, Fine, or Fee
    public associatedService: Service;  // Reference to the parent service object
}