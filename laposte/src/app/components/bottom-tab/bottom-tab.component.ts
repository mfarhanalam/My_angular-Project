import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
    private router: Router,
    private postServices: PostmethodService
  ) {}

  async ngOnInit() {
    this.handleFooterVisibility(); // Handle footer visibility on initial load
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.handleFooterVisibility(); // Update footer visibility on navigation
      }
    });
    this.language = await this.postServices.getLanguageTemp();
  }
  // Handle footer visibility based on the route
  private handleFooterVisibility() {
    const hideFooterRoutes = ['/home', '/history', '/benificiary'];
    this.isShowFooter = hideFooterRoutes.includes(this.router.url);
  }
  // Navigation items
  navItems = [
    { route: '/home', icon: 'bi bi-house-door', label: 'Home' },
    { route: '/benificiary', icon: 'bi bi-people', label: 'Benificiary' },
    { route: '/scanner', icon: 'bi bi-qr-code-scan', label: '' },
    { route: '/kyc', icon: 'bi-file-earmark-person', label: 'KYC' },
    { route: '/history', icon: 'bi bi-clock', label: 'History' }
  ];


}
