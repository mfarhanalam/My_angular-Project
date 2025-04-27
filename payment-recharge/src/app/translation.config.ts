import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LOCATION_INITIALIZED } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppConfig } from './config/AppConfig';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

export function ApplicationInitializerFactory(appConfig: AppConfig,
    translate: TranslateService, injector: Injector) {
    return async () => {
        await appConfig.load();
        await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));

        const deaultLang = 'ar';
        translate.addLangs(['en', 'ar']);
        translate.setDefaultLang(deaultLang);
        try {
            await translate.use(deaultLang).toPromise();
        } catch (err) {
            // console.log('language error', err);
        }
    };
}