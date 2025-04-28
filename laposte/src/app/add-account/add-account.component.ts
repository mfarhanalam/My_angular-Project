import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.scss'
})
export class AddAccountComponent {
  showAddAccount = true;
  showNewContact = true;
  showConfirmation = false;

  constructor(private router: Router) { }

  favorites = ['John Jones', 'James Jones', 'Ben Jones'];
  contacts = ['Andy Anderson', 'Bert Bilgnaut'];

  newContact = {
    account: 'xxxxxxxxx1240',
    firstName: 'James',
    surname: 'Jones',
    acName: 'Punb'
  };

  showNewContactForm() {
    this.showAddAccount = false;
    this.showNewContact = true;
  }

  cancelNewContact() {
    this.showNewContact = false;
    this.showAddAccount = true;
  }

  submitBankAccount() {
    this.showNewContact = false;
    this.showConfirmation = true;
  }

  returnToMain() {
    this.showConfirmation = false;
    this.showAddAccount = true;
  }
  navigateTo(pagename: string) {
    if (!!pagename) {
      this.router.navigateByUrl(pagename);
    }
  }
}
