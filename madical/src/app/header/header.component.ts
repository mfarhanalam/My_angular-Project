import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private sideDrawer: Offcanvas;


  constructor(private router: Router) { this.activeOnNavigationEnd();}


  selectedLink: string='home';
  activeOnNavigationEnd() {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        this.selectedLink = events.urlAfterRedirects.split('/')[1];
        this.selectedLink = this.getCurrentRoute(events.urlAfterRedirects);
      }
    })
  }

  getCurrentRoute(url: string) {
    if (url === '/' || url === '/home') {
      return 'home';
    } else {
      return url.split('/')[1];
    }
  }

  navigateTo(pageName: string) {
    this.router.navigateByUrl(pageName);
    this.selectedLink = pageName;
    this.closeSideDrawer();
  }
  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    const getHeader = document.getElementById('header');
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      if (!!getHeader) {
        getHeader.classList.add('headerEffect');
      }
    } else {
      if (!!getHeader) {
        getHeader.classList.remove('headerEffect');
      }
    }
  }




  openSideDrawer(drawername: string) {
    const canvasId = document.getElementById(drawername);
    this.sideDrawer = new Offcanvas(canvasId);
    if (!!canvasId) {
      this.sideDrawer.show();
    }
  }
  closeSideDrawer(){
    this.sideDrawer.hide();
}
}
