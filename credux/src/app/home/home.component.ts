import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}
  exploreItems = [
    { name: 'Credit Cards', icon: 'bi bi-credit-card' },
    { name: 'Bills & Recharges', icon: 'bi bi-receipt' },
    { name: 'Rewards', icon: 'bi bi-box2-heart' },
    { name: 'Travel', icon: 'bi bi-airplane' },
    { name: 'Rent via Credit Card', icon: 'bi bi-credit-card-2-back-fill' },
    { name: 'Refer', icon: 'bi bi-gift' },
    { name: 'View All', icon: 'bi bi-yelp' },
  ];

  navigateTo(name: string) {
    if (name === 'Rewards') {
      this.router.navigate(['/claimnow']);
    }
    // Handle other navigation if needed
  }

  bankName = 'UBIN xx 0420';
  profilePic = 'assets/profile.jpg';
  userName = 'Mohammad Kalam';

  checkBalance() {
    // Function to check balance
  }

  viewAll() {
    // Function to view all needs attention items
  }

  scanAndPay() {
    // Function to scan and pay
  }

  payContacts() {
    // Function to pay contacts
  }
}
