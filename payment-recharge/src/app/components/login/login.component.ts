import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostmethodService } from '../../config/postmethod.service';
import { LoginRequest } from '../../apppojo/requestmodel/LoginRequest';
import { UserLoginRequest } from '../../apppojo/requestmodel/UserLoginRequest';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  language: any;
  userLoginReq: UserLoginRequest = new UserLoginRequest();

  constructor(private router: Router, private postServices: PostmethodService,
    private transalte: TranslateService
  ) {

  }

  currentStep = 1;

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

 
  
  ngOnInit(): void {
    this.checkSessionData();
  }

  async checkSessionData() {
    this.language = await this.postServices.getLanguageTemp();
  }

  authenticateUserInput(userLoginRequest: UserLoginRequest): string {
    let message: string = "";
    if (userLoginRequest.mobileNumber === '' || userLoginRequest.mobileNumber == null) {
      message = this.transalte.instant('enterYourMobileNumber');
      this.postServices.focusAndScrollToElement('mobileNumberLog');
    } else if (userLoginRequest.emailId === '' || userLoginRequest.emailId == null) {
      message = this.transalte.instant('enterYouremailAddress');
      this.postServices.focusAndScrollToElement('emailIdLog');
    } else if (userLoginRequest.password === '' || userLoginRequest.password == null) {
      message = this.transalte.instant('enterYourPassword');
      this.postServices.focusAndScrollToElement('passwordLog');
    }
    return message;
  }

  loginUser(form: NgForm) {
    const value = form.value;
    const validationMessage = this.authenticateUserInput(this.userLoginReq);
    if (!!validationMessage) {
      this.postServices.notifyUser(validationMessage, 'error');
      return;
    }
  }

  navigateTo(pageurl: string) {
    if (!!pageurl) {
      this.router.navigateByUrl(pageurl);
    } else {
      console.log('Invalid page url' + pageurl);
    }
  }
}