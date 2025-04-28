import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SessionStatic } from './config/SessionStatic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SinhalaMagazine';
  showHeader: boolean = true;
  showFooter: boolean = true;

  constructor(public router: Router, public act: ActivatedRoute, private el: ElementRef,) {
    this.handleNavigationEvent();
  }



  ngOnInit() {
    this.checkHeader();
    setTimeout(() => {
      // alert("Click OK to enable fullscreen mode");
      this.toggleFullScreen();
    }, 1000);
  }

  ngAfterViewInit(): void {
    this.checkHeader();
  }



  public checkHeader = async () => {
    const currentURL = window.location.href;
    if (currentURL.includes('redirect?') || currentURL.includes('redirect') || currentURL.includes('subscription')) {
      this.showHeader = false;
      this.showFooter = false;
    } else {
      this.showHeader = true;
      this.showFooter = true;
    }
  }

  handleNavigationEvent() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.checkHeader();
        window.scrollTo(0, 0);
      }
      if (event instanceof NavigationEnd) {
        this.checkHeader();
        window.scrollTo(0, 0);
      }
      if (event instanceof NavigationError) {
        this.checkHeader();
        window.scrollTo(0, 0);
      }
    });
  }

  toggleFullScreen() {
    const elem = document.documentElement; // Get the main document element
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

}
