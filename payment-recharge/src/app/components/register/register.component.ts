import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostmethodService } from '../../config/postmethod.service';
import { NgForm } from '@angular/forms';
import { UserRegisterRequest } from '../../apppojo/requestmodel/UserRegisterRequest';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  language: any;
  userRegisterRequest: UserRegisterRequest = new UserRegisterRequest();

  constructor(private router: Router, private postServices: PostmethodService,
    private transalte: TranslateService
  ) {

  }

  ngOnInit(): void {
    this.checkSessionData();
  }

  async checkSessionData() {
    this.language = await this.postServices.getLanguageTemp();
  }

  authenticateUserInput(userRegisterRequest: UserRegisterRequest): string {
    let message: string = "";
    if (userRegisterRequest.fullName === '' || userRegisterRequest.fullName == null) {
      message = this.transalte.instant('enterYourName');
      this.postServices.focusAndScrollToElement('fullName');
    } else if (userRegisterRequest.mobileNumber === '' || userRegisterRequest.mobileNumber == null) {
      message = this.transalte.instant('enterYourMobileNumber');
      this.postServices.focusAndScrollToElement('mobileNumber');
    } else if (userRegisterRequest.emailId === '' || userRegisterRequest.emailId == null) {
      message = this.transalte.instant('enterYouremailAddress');
      this.postServices.focusAndScrollToElement('emailId');
    } else if (userRegisterRequest.password === '' || userRegisterRequest.password == null) {
      message = this.transalte.instant('enterYourPassword');
      this.postServices.focusAndScrollToElement('password');
    } else if (userRegisterRequest.repeatPassword === '' || userRegisterRequest.repeatPassword == null) {
      message = this.transalte.instant('repeatYourPassword');
      this.postServices.focusAndScrollToElement('repeatPassword');
    } else if (userRegisterRequest.password !== userRegisterRequest.repeatPassword) {
      message = this.transalte.instant('passwordsDoNotMatch');
      this.postServices.focusAndScrollToElement('repeatPassword');
    }
    return message;
  }

  registerUser(form: NgForm) {
    const value = form.value;
    const validationMessage = this.authenticateUserInput(this.userRegisterRequest);
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
