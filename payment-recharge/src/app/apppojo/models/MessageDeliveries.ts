
export class MessageDeliveries {
    public id: string;
    public mobileNumber: string;
    public message: string;
    public messageId: string;
    public deliveryState: string;
    public isDelivered: Boolean;
    public messageDate: Date;
    public retryDate: Date;
    public createdDate: Date;
}
