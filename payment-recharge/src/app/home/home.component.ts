import { Component, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { ApiResponse } from '../apppojo/responsemodel/ApiResponse';
import { PostmethodService } from '../config/postmethod.service';
import { Service } from '../apppojo/interface/Service';
import { Router } from '@angular/router';
import { SessionStatic } from '../config/SessionStatic';
import { Languages } from '../apppojo/models/Languages';
import { RequestModel } from '../apppojo/requestmodel/RequestModel';
import { RouteUrls } from '../config/RouteUrls';
import { ResponseModel } from '../apppojo/responsemodel/ResponseModel';
import { TranslateService } from '@ngx-translate/core';
import { EncryptdecryptService } from '../encryptdecrypt-service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {


  serviceList: Array<Service>;
  languageList: Array<Languages>;
  languageObj: Languages = null;
  language: any;
  lang: string;
  serviceparam: string;
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  constructor(private postServices: PostmethodService, private router: Router, private translateService: TranslateService,
    public encryptdecryptService: EncryptdecryptService
  ) {

  }

  ngOnInit(): void {
    this.configureData();
    this.checkSessionData();
  }

  ngOnDestroy(): void {
    this.closeLanguageCanvas();
  }

  async checkSessionData() {
    this.getSessionLang();
    this.language = await this.postServices.getLanguageTemp();
  }

  configureData() {
    this.getServiceList();
  }

  async getServiceList() {
    let apiResponse: ApiResponse = await this.postServices.apiCallsLocal('assets/dummyjson/service.json');
    if (apiResponse.status == 0) {
      this.serviceList = apiResponse.data;
    }
  }

  async handleServiceClick(serviceId: string) {
    this.postServices.saveStorage(SessionStatic.serviceIds, serviceId);
    this.serviceparam = btoa(await this.encryptdecryptService.encryptData(serviceId));
    this.router.navigate(
      ['services'], {
      queryParams: {
        id: this.serviceparam
      }
    });
  }




  convertLanguage = async (lang: string) => {
    this.language = lang;
    await this.postServices.setLanguagesTemp(lang);
    // await this.postServices.saveStorage(SessionStatic.selectedLanguage, lang)
    this.closeLanguageCanvas();
    // window.location.reload();
  }

  getSessionLang() {
    const savedLanguage = this.postServices.getStorage(SessionStatic.selectedLanguage);
    this.language = savedLanguage ? savedLanguage : 'en';
    // this.isFrench = this.language === 'fr';
  }

  openLanguageCanvas() {
    this.postServices.openOffcanvas('languageCanvas');
  }

  closeLanguageCanvas() {
    this.postServices.closeOffcanvas('languageCanvas');
  }


  notifications = [
    { notification: 'Property tax payment due', frenchNotification: 'Paiement de la taxe en date ' },
    { notification: 'Traffic fine payment due', frenchNotification: "Paiement d'amende de circulation " },
    { notification: 'Municipal service fee due', frenchNotification: 'Frais de service municipaux' },
  ];

  navigateTo(pageurl: string) {
    if (!!pageurl) {
      this.router.navigateByUrl(pageurl);
    } else {
      console.log("Invalid page url");
    }
  }

  // static data
  slides = [
    { img: 'img/images/banner6.png', alt: 'Slide 3' },
    // { img: 'img/images/banner4.webp', alt: 'Slide 1' },
    { img: 'img/images/banner5.png', alt: 'Slide 2' },

  ];

  slideConfig = {
    slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, dots: false, infinite: true, arrows: true,
  }

  handleMenuClick() {
    this.postServices.notifyUser("Coming soon! We're working on it.", 'info')
  }
};




