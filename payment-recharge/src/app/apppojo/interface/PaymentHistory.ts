import { Service } from "./Service";
import { SubService } from "./SubService";

export class PaymentHistory {
  public id: string;
  public paymentDate: Date; // Date of payment
  public paymentStatus: string; // Completed, Pending, Failed
  public subService: SubService; // Sub-service associated with the payment
  public service: Service; // Parent service for the sub-service
  public amount: number; // Amount paid
  public paymentMethod: string; // e.g., Credit Card, Bank Transfer
  public transactionId: string; // Unique transaction reference
  public description: string; // Additional info or remarks
}
