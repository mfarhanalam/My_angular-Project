import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  constructor(private redirect:Router){}
  navigateToElement(){
    this.redirect.navigateByUrl('')
  }
  navigateToAccordion(){
    this.redirect.navigateByUrl('accordion');
  }
  navigateToLogin(){
    this.redirect.navigateByUrl('login');
  }
}
