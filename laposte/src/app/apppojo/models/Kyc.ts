export class Kyc {
    // Unique identifier for the parcel
    public id: string;

    public userDocumentName: string;
    public streetAddress: string;
    public apartment: string;
    public buildingName: string;
    public city: string;
    public postalCode: string;

    // Sender's details
    public senderName: string;
    public senderAddress: string;
    public senderCity: string;
    public senderState: string;
    public senderZipCode: string;
    public senderPhone: string;
    public senderEmail: string;

    // Receiver's details
    public receiverName: string;
    public receiverAddress: string;
    public receiverCity: string;
    public receiverState: string;
    public receiverZipCode: string;
    public receiverPhone: string;
    public receiverEmail: string;

    // Parcel details
    public parcelWeight: number; // Weight of the parcel in kilograms
    public parcelDimensions: { length: number; width: number; height: number }; // Dimensions in centimeters
    public parcelDescription: string; // Description of the parcel contents
    public isFragile: boolean; // Indicates if the parcel contains fragile items
    public isPerishable: boolean; // Indicates if the parcel contains perishable items
    public declaredValue: number; // Value of the parcel for insurance purposes

    // Shipment details
    public shipmentDate: Date; // Date of shipment
    public deliveryDate: Date; // Expected delivery date
    public trackingNumber: string; // Tracking number for the parcel
    public shippingMethod: string; // E.g., Standard, Express, Overnight

    // Payment details
    public shippingCost: number; // Cost of shipping
    public paymentStatus: string; // E.g., Paid, Pending, COD (Cash on Delivery)

    // Additional details
    public specialInstructions: string; // Any special delivery instructions
    public currentStatus: string; // E.g., In Transit, Delivered, Returned
}