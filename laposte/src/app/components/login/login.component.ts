import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router, private postServices: PostmethodService,
    private transalte: TranslateService
  ) {

  }

  currentStep: number = 1;

  nextStep() {
    if (this.currentStep < 5) {
      this.currentStep++;
    }


  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }

    if (this.currentStep == 1) {
      this.handleInitialStep();
    }
  }



  ngOnInit(): void {
    this.checkSessionData();
  }


  ngAfterViewInit(): void {
    this.handleVideoPlay();
  }

  handleInitialStep() {
    if (this.currentStep == 1) {
      this.handleVideoPlay();
    }
  }

  handleVideoPlay() {
    if (this.videoElement) {
      const video = this.videoElement.nativeElement;
      video.muted = true;  // Ensure muted
      video.loop = true;   // Ensure loop
      video.autoplay = true;  // Set autoplay
      video.play().catch(error => console.error("Autoplay prevented:", error));
    }
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

  moveToNext(event: any, current: HTMLInputElement, next?: HTMLInputElement) {
    if (current.value.length === 1 && next) {
      next.focus();
    }
  }

  moveBack(event: KeyboardEvent, current: HTMLInputElement, prev?: HTMLInputElement) {
    if (event.key === 'Backspace' && current.value.length == 0 && prev) {
      prev.focus();
    }
  }


  navigateTo(pageurl: string) {
    if (!!pageurl) {
      this.router.navigateByUrl(pageurl);
    } else {
      console.log('Invalid page url' + pageurl);
    }
  }

  formSubmit() {
    this.postServices.notifyUser("Successfully Registered", 'success');
  }

  alertMessage() {
    this.postServices.notifyUser("Coming soon! We're working on it.", 'info')
  }
}
