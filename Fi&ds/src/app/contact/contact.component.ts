import { Component } from '@angular/core';
import { RegistrationRequest } from '../../assets/interfaces/RegistrationRequest';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  registrationRequest: RegistrationRequest;
  addrress: String = '#10-3-282/2 , 2nd Floor, Humayun Nagar,Mehdipatnam, Hyderabad – 500028. Telangana, India';
  mail: String = 'info@fi&ds.com';
  contact: String = '+91 7707039399';
  currentYear = new Date().getFullYear();


  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
}
