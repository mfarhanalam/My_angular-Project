import { ResponseModel } from './../apppojo/responsemodel/ResponseModel';
import { SessionStatic } from './SessionStatic';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConfig } from './AppConfig';
import { AppConfigModel } from './AppConfigModel';
import { Customers } from '../apppojo/models/Customers';
import { Languages } from '../apppojo/models/Languages';
import { ApiResponse } from '../apppojo/responsemodel/ApiResponse';
import { TranslateService } from '@ngx-translate/core';
import axios from 'axios';
import { DspSubscriptionRequest } from '../apppojo/clients/zain/DspSubscriptionRequest';
import { SubscriptionAuthentication } from '../apppojo/clients/zain/SubscriptionAuthentication';
import { RequestModel } from '../apppojo/requestmodel/RequestModel';
import { RouteUrls } from './RouteUrls';
import { PortalResponse } from '../apppojo/responsemodel/PortalResponse';
import { EncryptdecryptService } from '../encryptdecrypt-service';
import { HomeResponse } from '../apppojo/responsemodel/HomeResponse';
import { Modal, Offcanvas } from 'bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../all-services/notification.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostmethodService {
  userId: string = null;
  authToken: string = null;
  responseModel: ResponseModel;
  apiServer: AppConfigModel;
  private modals: Map<string, Modal> = new Map();
  private offcanvasMap: Map<string, Offcanvas> = new Map();
  private apiUrl = 'https://v6.exchangerate-api.com/v6/c1e60f8e4ade593f22258155/latest/ZAR';
  constructor(private http: HttpClient, public translateService: TranslateService, public toastr: ToastrService,
    private encryptService: EncryptdecryptService, private toastrService: NotificationService,
  ) {
    this.apiServer = AppConfig.settings;
  }
  public staticUser() {
    let customerObj = new Customers();
    // customerObj.mobileNumber = '912953090';
    // customerObj.mobileNumber = '912174315';
    // customerObj.mobileNumber = '0904748909';
    // customerObj.mobileNumber = '9903765630';
    return customerObj;
    // return null;
  }
  public getUserSession = async () => {
    const customerObj: Customers = await this.getStorage(SessionStatic.customerObjects);
    if (!!customerObj) {
      if (!!customerObj.mobileNumber) {
        return customerObj;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }


  validateToken = async (customer: Customers): Promise<string> => {
    const authentication = await this.getStorage(SessionStatic.subscriptionAuthentications);
    if (!!authentication) {
      if (authentication.statusCode == 0) {
        let currentDate = new Date();
        let subscriptionDate = new Date(authentication.valid_until);
        let newDateNumber: number = subscriptionDate.getTime();
        if (currentDate.getTime() < newDateNumber) {
          return 'fullSubscribed';
        } else {
          return 'partialSubscribed';
        }
      } else if (authentication.statusCode == 1 || authentication.statusCode == 2
        || authentication.statusCode == 3) {
        return 'partialSubscribed';
      } else {
        return 'notSubscribed';
      }
    } else {
      return this.checkTokenOnline(customer);
    }
  }

  checkTokenOnline = async (customer: Customers): Promise<string> => {
    if (!!customer.mobileNumber) {
      const userReq: DspSubscriptionRequest = new DspSubscriptionRequest();
      userReq.msisdn = customer.mobileNumber;
      const request: RequestModel = new RequestModel();
      request.reqObject = userReq;
      request.mobileNumber = customer.mobileNumber;
      const responseResult: ApiResponse = await this.apiCalls(request, RouteUrls.checksubscription);
      // console.log('apiRe: '+JSON.stringify(responseResult))
      if (responseResult.status == 0) {
        const response: ResponseModel = responseResult.data;
        // console.log('apiRe response: '+JSON.stringify(response))
        if (response.statusCode === 0) {
          const authentication: SubscriptionAuthentication = response.respObject;
          // console.log('apiRe authentication: '+JSON.stringify(authentication))
          if (authentication != null) {
            if (authentication.statusCode === 0) {
              await this.saveStorage(SessionStatic.subscriptionAuthentications, authentication);
              let subscriptionDate = new Date(authentication.valid_until);
              let newDateNumber: number = subscriptionDate.getTime();
              let currentDate = new Date();
              if (currentDate.getTime() < newDateNumber) {
                return 'fullSubscribed';
              } else {
                return 'partialSubscribed';
              }
            } else if (authentication.statusCode === 1) {
              await this.saveStorage(SessionStatic.subscriptionAuthentications, authentication);
              return 'partialSubscribed';
            } else if (authentication.statusCode === 2) {
              return 'notSubscribed';
            } else {
              return 'notSubscribed';
            }
          } else {
            return 'notSubscribed';
          }
        } else {
          return 'notSubscribed';
        }
      } else {
        return 'notSubscribed';
      }
    } else {
      return 'notSubscribed';
    }

  }
  public checkData = async () => {
    const result: PortalResponse = await this.getStorage(SessionStatic.homePageResponse);
    if (!!result) {
      if (!!result.categoryList) {
        if (result.categoryList.length > 0) {
          if (!!result.feedList) {
            if (result.feedList.length > 0) {
              return result;
            } else {
              return null;
            }
          } else {
            return null;
          }
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  public async getDirection(): Promise<any> {
    let direction = 'ltr';
    let languageObj: Languages = await this.getLanguage();
    this.translateService.setDefaultLang(languageObj.shortLanguageName);
    if (languageObj.languageName === 'Arabic') {
      direction = 'rtl';
    } else {
      direction = 'ltr';
    }
    return direction;
  }
  public async getLanguage(): Promise<Languages> {
    let languageObj: Languages = await this.getStorage(SessionStatic.languageObj);
    if (!!languageObj) {
      return languageObj;
    } else {
      return this.setLanguages();
    }
  }


  public async getLanguageTemp() {
    let lang: string = await this.getStorage(SessionStatic.lang);
    if (lang == null) {
      const userLang = this.apiServer.defaultLanguage;
      if (!!userLang) {
        if (userLang === 'fr-FR') {
          lang = 'fr';
        } else if (userLang === 'en-US') {
          lang = 'en';
        } else {
          lang = this.apiServer.defaultLanguage;
        }
      } else {
        lang = this.apiServer.defaultLanguage;
      }
    }
    // Do not overwrite lang if it was already set
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    return lang;
  }


  public async setLanguages(): Promise<Languages> {
    const languageObj = new Languages();
    // languageObj.id = '5df4fabd5e95e80af23498d7';
    // languageObj.languageName = 'English';
    // languageObj.shortLanguageName = 'en';
    // languageObj.serviceLanguageName = 'English';
    languageObj.id = '67458b3b7a060e00758fdbf0';
    languageObj.languageName = 'Sinhala';
    languageObj.shortLanguageName = 'si';
    languageObj.serviceLanguageName = 'සිංහල';
    await this.saveStorage(SessionStatic.languageObj, languageObj);
    await this.saveStorage(SessionStatic.shortlanguageName, languageObj.shortLanguageName);
    this.translateService.setDefaultLang(languageObj.shortLanguageName);
    return languageObj;
  }

  public setLanguagesTemp = async (lang: string) => {
    if (lang == null) {
      lang = this.apiServer.defaultLanguage;
    } else if (lang == 'en') {
      lang = 'en';
    } else {
      lang = 'fr';
    }
    await this.saveStorage(SessionStatic.lang, lang);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    return lang;
  }

  public async apiCalls(reqObj: any, url: String) {
    this.progressLoad();
    let resultResponse: ApiResponse;
    const uri = this.apiServer.webServicesUrl + url;
    try {
      const options = {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept-Language': 'en',
          'Authorization': 'Bearer ',
        },
      };
      let language = await this.getStorage(SessionStatic.shortlanguageName);
      if (!!language) {
        reqObj.lang = language;
      } else {
        reqObj.lang = 'ar';
      }
      resultResponse = await axios.post(uri, reqObj)
        .then((response) => {
          if (response.status === 200) {
            const result: ApiResponse = {
              status: 0,
              data: response.data,
              message: 'Success',
            };
            return result;
          } else {
            const result: ApiResponse = {
              status: 1,
              data: null,
              message: 'Please try again',
            };
            return result;
          }
        }, (error: any) => {
          const result: ApiResponse = {
            status: 2,
            data: error,
            message: 'Please try again',
          };
          return result;
        });

    } catch (error) {
      const result: ApiResponse = {
        status: 3,
        data: error,
        message: 'Please try again',
      };
      resultResponse = result;
    } finally {
      this.progressUnLoad();
      this.printConsole('url: ' + uri);
      this.printConsole('input : ' + url + ':' + JSON.stringify(reqObj));
      this.printConsole('response: ' + url + ':' + JSON.stringify(resultResponse));
      return resultResponse;
    }
  }
  public async apiCallsNoLoader(reqObj: any, url: String) {
    // this.progressLoad();
    let resultResponse: ApiResponse;
    const uri = this.apiServer.webServicesUrl + url;
    try {
      const options = {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept-Language': 'en',
          'Authorization': 'Bearer ',
        },
      };
      let language: Languages = await this.getLanguage();
      if (!!language) {
        reqObj.lang = language.shortLanguageName;
      } else {
        reqObj.lang = 'en';
      }
      resultResponse = await axios.post(uri, reqObj)
        .then((response) => {
          if (response.status === 200) {
            const result: ApiResponse = {
              status: 0,
              data: response.data,
              message: 'Success',
            };
            return result;
          } else {
            const result: ApiResponse = {
              status: 1,
              data: null,
              message: 'Please try again',
            };
            return result;
          }
        }, (error: any) => {
          const result: ApiResponse = {
            status: 2,
            data: error,
            message: 'Please try again',
          };

          return result;
        });

    } catch (error) {
      const result: ApiResponse = {
        status: 3,
        data: error,
        message: 'Please try again',
      };
      resultResponse = result;
    } finally {
      // this.progressUnLoad();
      this.printConsole('url :' + uri)
      this.printConsole('input:' + JSON.stringify(reqObj))
      this.printConsole('response:' + JSON.stringify(resultResponse))
      return resultResponse;
    }
  }



  public async apiCallsLocal(url: string) {
    this.progressLoad();
    let resultResponse: ApiResponse;
    const uri = url;
    try {
      resultResponse = await axios.get(uri)
        .then((response) => {
          if (response.status == 200) {
            const result: ApiResponse = new ApiResponse();
            result.status = 0;
            result.data = response.data;
            result.message = "Success";
            return result;
          } else {
            const result: ApiResponse = new ApiResponse();
            result.status = 1;
            result.message = "Please try again";
            return result;
          }
        }, (error) => {
          const result: ApiResponse = new ApiResponse();
          result.status = 2;
          result.message = "Please try later";
          return result;
        });
    } catch (error) {
      const result: ApiResponse = new ApiResponse();
      result.status = 3;
      result.message = "Please try again";
      resultResponse = result;
    } finally {
      this.progressUnLoad();
      return resultResponse;
    }
  }
  public async postWithHeader(reqObj: any, url: String) {
    this.progressLoad();
    let language: string = await this.getStorage(SessionStatic.shortlanguageName);


    let options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': language
      }
    };
    return this.http.post(this.apiServer.webServicesUrl + url, reqObj, options).pipe(
      map(res => {
        this.progressUnLoad();
        return res;
      })
    )
  }


  public async getMethod(url: any) {
    this.progressLoad();
    let language: string = await this.getStorage(SessionStatic.shortlanguageName);
    let options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': language
      }
    };
    return this.http.get(this.apiServer.webServicesUrl + url, options).pipe(
      map(res => {
        this.progressUnLoad();
        return res;
      })
    )
  }


  progressLoad() {
    document.getElementById('loadings').style.display = 'flex';
  }
  progressUnLoad() {
    document.getElementById('loadings').style.display = 'none';
  }
  printConsole(abc: string) {
    if (this.apiServer?.isConsole) {
      console.log(abc);
    }
  }

  public removeDuplicate = async (list: Array<any>, key: string) => {
    return list.filter((obj: any, pos: number, arr: Array<any>) => {
      return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === pos;
    });
  }


  private initiateStrage = async (key: string, value: any, isLocal: boolean) => {
    const encptedKey = await this.encryptService.encryptData(key);
    let encptedString = null;
    if (typeof value === "string") {
      encptedString = await this.encryptService.encryptData(value);
    } else if (typeof value === "number") {
      encptedString = await this.encryptService.encryptData(value);
    } else if (typeof value === "boolean") {
      encptedString = await this.encryptService.encryptData(value);
    } else if (typeof value === "object") {
      encptedString = await this.encryptService.encryptData(JSON.stringify(value));
    }
    if (!!encptedString) {
      if (isLocal) {
        localStorage.setItem(encptedKey, encptedString);
      } else {
        sessionStorage.setItem(encptedKey, encptedString);
      }
    }
  }

  public saveStorage = async (key: string, value: any) => {
    await this.initiateStrage(key, value, false);
  }
  public saveLocalStorage = async (key: string, value: any) => {
    await this.initiateStrage(key, value, true);
  }
  public getStorage = async (key: string) => {
    let result: any = null;
    try {
      const encptedKey = await this.encryptService.encryptData(key);
      let sessionValue = sessionStorage.getItem(encptedKey);
      if (sessionValue == null || sessionValue === 'undefined' || sessionValue === undefined) {
        sessionValue = localStorage.getItem(encptedKey);
      }
      if (!!sessionValue) {
        const value = await this.encryptService.decryptData(sessionValue);
        try {
          const jsonRegex = /{[^]*?}|[[^]*?]/g;
          const matches = value.match(jsonRegex);
          if (matches) {
            result = JSON.parse(value);
          } else {
            result = value;
          }
        } catch (e) {
          // this.printConsole('key: ' + key)
          // this.printConsole('type: ' + type)
          // this.printConsole('value: ' + JSON.stringify(value))
          // this.printConsole('storage get:' + e);
          this.removeStorage(encptedKey);
          // this.removeStorage(key);
          result = null;
        }
      } else {
        result = null;
      }
    } catch (e) {
      // this.printConsole('storage get2:' + e);
      return null;
    } finally {
      return result;
    }
  }
  public removeStorage = async (key: string) => {
    const encptedKey = await this.encryptService.encryptData(key);
    sessionStorage.removeItem(encptedKey);
    localStorage.removeItem(encptedKey);
  }



  // Method to open a specific modal by its ID
  public openModal(modalId: string) {
    const modalElement = document.getElementById(modalId);
    if (modalElement && !this.modals.has(modalId)) {
      const modalInstance = new Modal(modalElement);
      this.modals.set(modalId, modalInstance);
    }
    this.modals.get(modalId)?.show();
  }

  // Method to close a specific modal by its ID
  public closeModal(modalId: string) {
    const modalInstance = this.modals.get(modalId);
    if (modalInstance) {
      modalInstance.hide();
      this.modals.delete(modalId); // Remove the instance if no longer needed
    }
  }


  public openOffcanvas(offcanvasID: string): void {
    const offcanvasElement = document.getElementById(offcanvasID);
    if (offcanvasElement && !this.offcanvasMap.has(offcanvasID)) {
      const offcanvasInstance = new Offcanvas(offcanvasElement);
      this.offcanvasMap.set(offcanvasID, offcanvasInstance);
    }
    this.offcanvasMap.get(offcanvasID)?.show();
  }

  // Method to close a specific Offcanvas by its ID
  public closeOffcanvas(offcanvasID: string): void {
    const offcanvasInstance = this.offcanvasMap.get(offcanvasID);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
      this.offcanvasMap.delete(offcanvasID); // Clean up the instance
    }
  }

  toastObject = {
    // disableTimeOut:true,
    closeButton: false,
    progressBar: false,
    tapToDismiss: true,
    timeOut: 2000,
  }

  showCustomMessage(rawMessage: string, messageType: string) {
    let message: string = 'pleasetry';
    if (rawMessage === '') {
      message = this.translateService.instant('pleasetry');
    } else {
      if (rawMessage != undefined && rawMessage !== null) {
        message = this.translateService.instant(rawMessage);
        // this.translateService.get(rawMessage).subscribe((translated: string) => {
        //   message = translated;
        // });
      } else {
        message = this.translateService.instant('pleasetry');
      }
    }

    if (messageType === 'warning') {
      this.toastr.warning(message, '', this.toastObject);
    } else if (messageType === 'success') {
      this.toastr.success(message, '', this.toastObject);
    } else if (messageType === 'error') {
      this.toastr.success(message, '', this.toastObject);
    } else {
      this.toastr.warning(message, '', this.toastObject);
    }
  }



  public notifyUser = async (message: string, type: any) => {
    this.toastrService.showMessage(message, type);
  }


  focusAndScrollToElement(id: string) {
    const getId: HTMLElement = document.getElementById(id) as HTMLElement;
    if (!!getId) {
      getId.focus();
      getId.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  getExchangeRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
