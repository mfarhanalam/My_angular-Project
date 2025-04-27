import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { PostmethodService } from '../../config/postmethod.service';

@Component({
  selector: 'app-bottom-tab',
  templateUrl: './bottom-tab.component.html',
  styleUrl: './bottom-tab.component.scss'
})
export class BottomTabComponent implements OnInit {
  activePage: string = '';
  isShowFooter: boolean = true;
  scannerOpen = false;
  language: any;




  constructor(
    private router: Router, private postServices: PostmethodService
  ) { }

  async ngOnInit() {
    this.setActiveTab(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveTab(event.urlAfterRedirects);
        this.handleFooterVisibility();
      }
    });
    this.language = await this.postServices.getLanguageTemp();
  }

  // Simplified navigation handler
  private setActiveTab(url: string): void {
    const routes: { [key: string]: string } = {
      '/home': 'home',
      '/history': 'history'
    };
    this.activePage = Object.entries(routes).find(([path]) => url.includes(path))?.[1] || '';
  }



  private handleFooterVisibility() {
    const hideFooterRoutes = ['/register', '/scanner', '/login', '/splash', '/'];
    this.isShowFooter = !hideFooterRoutes.includes(this.router.url);
  }

  navigateTo(page: string): void {
    this.router.navigateByUrl(page);
  }
}
