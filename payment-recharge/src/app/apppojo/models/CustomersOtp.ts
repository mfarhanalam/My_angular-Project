import { Customers } from './Customers';

export class CustomersOtp {
    public id: string;
    public customerObj: Customers;
    public otp: string;
    public message: string;
    public sentDate: Date;
    public expiryDate: Date;
    public validated: Boolean;
    public validateDate: Date;
}
