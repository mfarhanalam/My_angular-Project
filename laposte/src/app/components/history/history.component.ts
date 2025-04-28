import { Component, OnInit } from '@angular/core';
import { PaymentHistory } from '../../apppojo/interface/PaymentHistory';
import { PostmethodService } from '../../config/postmethod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {
  language: any;
  paymentHistory: PaymentHistory[] = [];

  constructor(private postServices: PostmethodService, private router: Router) { }

  ngOnInit(): void {
    this.loadPaymentHistory();
    this.checkSessionData();
  }

  async checkSessionData() {
    this.language = await this.postServices.getLanguageTemp();
  }

  async loadPaymentHistory() {
    const apiResponse: any = await this.postServices.apiCallsLocal('assets/dummyjson/paymenthistory.json');
    if (apiResponse.status === 0) {
      this.paymentHistory = apiResponse.data;
    }
  }


  searchTerm: string = ''; // Two-way data binding for search input

  // Mock transaction data
  transactions = [
    { type: 'recharge', description: 'Mobile recharged', user: 'Imran', time: '3 hours ago', amount: 322, isDebit: true },
    { type: 'payment', description: 'Electricity bill paid', user: 'Imran', time: '2 hours ago', amount: 1200, isDebit: true },
    { type: 'refund', description: 'Refund from Amazon', user: 'Imran', time: '1 day ago', amount: 1500, isDebit: false },
    { type: 'recharge', description: 'Mobile recharged', user: '7565542267', time: '1 day ago', amount: 30, isDebit: true },
    { type: 'transfer', description: 'Money sent to friend', user: 'Jayauddin', time: '2 days ago', amount: 500, isDebit: true },
    { type: 'shopping', description: 'Online shopping', user: 'Imran', time: '3 days ago', amount: 800, isDebit: true },
    { type: 'subscription', description: 'Netflix subscription', user: 'Home', time: '1 week ago', amount: 499, isDebit: true },
    { type: 'recharge', description: 'Mobile recharged', user: '7871456522', time: '16 hours ago', amount: 200, isDebit: true },
    { type: 'deposit', description: 'Salary credited', user: 'Imran', time: '1 week ago', amount: 25000, isDebit: false },
    { type: 'withdrawal', description: 'ATM withdrawal', user: 'Imran', time: '2 weeks ago', amount: 10000, isDebit: true },
    { type: 'recharge', description: 'Mobile recharged', user: 'Home', time: '1 day ago', amount: 322, isDebit: true },
    { type: 'investment', description: 'Mutual fund investment', user: 'Imran', time: '1 month ago', amount: 5000, isDebit: true },
    { type: 'refund', description: 'Refund from Zomato', user: 'Jayauddin', time: '1 month ago', amount: 300, isDebit: false },
  ];

  // Filtered transactions based on search term
  get filteredTransactions() {
    return this.transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      transaction.user.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Dynamically return icon class based on transaction type
  getTransactionIcon(type: string): string {
    const iconMap: { [key: string]: string } = {
      recharge: 'bi bi-phone',
      received: 'received-icon',
      paid: 'paid-icon'
    };
    return iconMap[type] || 'default-icon';
  }

  makePayment() {
    this.router.navigateByUrl('home');
  }
}
