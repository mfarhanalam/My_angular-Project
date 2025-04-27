import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('fr'); // Set default language
    this.translateService.use('fr'); // Use English by default
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
  }
}
// 