
export class SmsReminder {
    public id: string;
    public smsPeriod: string;
    public status: Boolean;
    public smsType: string;
    public deliveryTime: Date;
    public deliveryTimeString: string;
    public subscribedFrequency: string;
    public arabicMessage: string;
    public englishMessage: string;
    public startDate: Date;
    public nextDeliveryDate: Date;
    public createdDate: Date;
}
