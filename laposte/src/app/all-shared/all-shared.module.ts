import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppConfig } from '../config/AppConfig';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleService } from '../config/sample.service';
import { WINDOW_PROVIDERS } from '../window.provider';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { StepperModule, } from 'primeng/stepper';
import { StepsModule, } from 'primeng/steps';
import { WebcamModule } from 'ngx-webcam';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { DropdownModule } from 'primeng/dropdown';



export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export function initializeApp(appConfig: AppConfig) {
    return () => appConfig.load();
}



@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule,
        SlickCarouselModule,
        TranslateModule,
        ToastModule,
        StepperModule,
        StepsModule,
        WebcamModule,
        ImageCropperComponent,
        DropdownModule

    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule,
        StepperModule,
        StepsModule,
        WebcamModule,
        ImageCropperComponent,
        DropdownModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        ToastrModule.forRoot({ positionClass: 'toast-center-center', preventDuplicates: true, }),
        SlickCarouselModule], providers: [
            // { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
            // SnotifyService,
            DatePipe,
            SampleService,
            MessageService,
            AppConfig, {
                provide: APP_INITIALIZER,
                useFactory: initializeApp,
                deps: [AppConfig], multi: true,
            },
            WINDOW_PROVIDERS,
            provideHttpClient(withInterceptorsFromDi()),
        ]
})
export class AllSharedModule { }
