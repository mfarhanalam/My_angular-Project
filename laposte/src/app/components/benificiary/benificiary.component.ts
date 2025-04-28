import { Component } from '@angular/core';

@Component({
  selector: 'app-benificiary',
  templateUrl: './benificiary.component.html',
  styleUrl: './benificiary.component.scss'
})
export class BenificiaryComponent {
  showBeneficiaries = true;
  showNewContact = false;
  showConfirmation = false;

  favorites = ['John Jones', 'James Jones', 'Ben Jones'];
  contacts = ['Andy Anderson', 'Bert Bilgnaut'];

  newContact = {
    id: 'xxxxxxxxx',
    firstName: '',
    surname: '',
    phone: '+263123456789'
  };

  showNewContactForm() {
    this.showBeneficiaries = false;
    this.showNewContact = true;
  }

  cancelNewContact() {
    this.showNewContact = false;
    this.showBeneficiaries = true;
  }

  submitContact() {
    this.showNewContact = false;
    this.showConfirmation = true;
  }

  returnToMain() {
    this.showConfirmation = false;
    this.showBeneficiaries = true;
  }
}

