import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit {

  screenTimeOut: number = 3000;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.handleScreenTimeout();
  }

  handleScreenTimeout() {
    setTimeout(() => {
      this.navigateTo('home');
    }, this.screenTimeOut);
  }

  navigateTo(pageurl: string) {
    if (!!pageurl) {
      this.router.navigateByUrl(pageurl);
    } else {
      console.log("invalid page url");
    }
  }
}
