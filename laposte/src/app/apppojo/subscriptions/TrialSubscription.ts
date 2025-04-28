import { Customers } from '../models/Customers';

export class TrialSubscription {
    public id: string;
    public mobileNumber: string;
    public customersObj: Customers;
    public remarks: string;
    public trialDate: Date;
    public expiryDate: Date;
    public trialDateString: string;
    public chargingStatus: Boolean;
}
