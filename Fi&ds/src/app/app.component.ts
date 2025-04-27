import { Component } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'gsap';
  constructor (private router:Router){
    this.onSuccessfullRoute();
  }

  isShowHeader: boolean = true;
  isShowFooter: boolean = true;
  checkHeaderFooter() {
    const currentUrl = window.location.href;
    if (currentUrl.includes('splash')) {
      this.isShowHeader  = false;
      this.isShowFooter  = false;
    } else{
      this.isShowHeader  = true;
      this.isShowFooter  = true;
    }
  }

  onSuccessfullRoute(){
    this.router.events.subscribe((event)=> {
      if(event instanceof NavigationStart){
        this.checkHeaderFooter();
      }
      if(event instanceof NavigationEnd) {
        this.checkHeaderFooter();
      }
      if(event instanceof NavigationError){
        this.checkHeaderFooter();
      }
    })
  }
}
