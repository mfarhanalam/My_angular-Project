import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllSharedModule, HttpLoaderFactory } from './all-shared/all-shared.module';
import { HttpClient } from '@angular/common/http';
import { SeoService } from './seo.service';
import { CallbackComponent } from './callback/callback.component';
import { SearchComponent } from './components/search/search.component';
import { BottomTabComponent } from './components/bottom-tab/bottom-tab.component';
import { MessageService } from 'primeng/api';
import { HistoryComponent } from './components/history/history.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { ServicesComponent } from './components/services/services.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { RechargePlanComponent } from './recharge-plan/recharge-plan.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ScannerComponent } from './components/scanner/scanner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    SearchComponent,
    BottomTabComponent,
    HistoryComponent,
    MyprofileComponent,
    ServicesComponent,
    NotificationComponent,
    LoginComponent,
    RegisterComponent,
    SplashScreenComponent,
    RechargePlanComponent,
    ScannerComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AllSharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [SeoService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
