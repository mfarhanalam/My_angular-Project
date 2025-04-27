import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  addrress: String = '#10-3-282/2 , 2nd Floor, Humayun Nagar,Mehdipatnam, Hyderabad – 500028. Telangana, India';
  mail: String = 'info@fi&ds.com';
  contact: String = '+91 7707039399';
  currentYear = new Date().getFullYear();
  constructor(private router:Router){  }

  
  navigateTo(pageName:string){
    this.router.navigateByUrl(pageName);
    
  }
}
