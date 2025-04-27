import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Modal, Offcanvas } from 'bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = false;
  private bootstrapModal: Modal;
  private sideDrawer: Offcanvas;
  constructor(private redirect: Router, private translate: TranslateService) {
    this.activeOnNavigationEnd();
    const savedLang = sessionStorage.getItem('selectedLanguage') || 'fr';

    this.translate.setDefaultLang('fr');
    this.translate.use(savedLang);
    this.activeLang = savedLang;
  }

  activeLang: unknown;
  switchLanguage(lang: string) {
    // Set the selected language in the TranslateService
    this.translate.use(lang);
    // Save the selected language in localStorage
    sessionStorage.setItem('selectedLanguage', lang);
    this.activeLang = lang;
    this.closeBootstrapModal();
    // this.closeSideDrawer();
  }

  ngOnInit(): void {
    // if (screen.width < 768) {
    //   this.openSideDrawer('sideDrawer');
    // } else {
    //   this.closeSideDrawer();
    // }

  }
  togglePanel(collapseButton: HTMLElement, collapsePanel: HTMLElement) {
    if (this.isCollapsed) {
      collapseButton.classList.add('collapsed');
      collapsePanel.classList.remove('show');
    } else {
      collapsePanel.classList.add('show');
      collapseButton.classList.remove('collapsed');
    }
    this.isCollapsed = !this.isCollapsed
  }

  openBoottsrapModal(modalname: string) {
    const modalId = document.getElementById(modalname);
    this.bootstrapModal = new Modal(modalId);
    if (!!modalId) {
      this.bootstrapModal.show();
    }
  }

  closeBootstrapModal() {
    this.bootstrapModal.hide();
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
  selectedLink: any;
  activeOnNavigationEnd() {
    this.redirect.events.subscribe((events) => {
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
  navigateTo(pagename: string,) {
    this.selectedLink = pagename;
    this.redirect.navigateByUrl(pagename);
    this.closeSideDrawer();
  }


}
