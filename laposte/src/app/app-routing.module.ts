import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { SearchComponent } from './components/search/search.component';
import { HistoryComponent } from './components/history/history.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { RechargePlanComponent } from './recharge-plan/recharge-plan.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { BenificiaryComponent } from './components/benificiary/benificiary.component';
import { SendMoneyComponent } from './components/send-money/send-money.component';
import { KycComponent } from './components/kyc/kyc.component';
import { FaceCaptureComponent } from './components/face-capture/face-capture.component';
import { FingerprintScanComponent } from './components/fingerprint-scan/fingerprint-scan.component';
import { VerifyBiometricComponent } from './components/verify-biometric/verify-biometric.component';
import { SendVoucherComponent } from './send-voucher/send-voucher.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { PostofficeComponent } from './postoffice/postoffice.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { MailServicesComponent } from './mail-services/mail-services.component';
import { ExpressMailComponent } from './express-mail/express-mail.component';
import { StampsComponent } from './stamps/stamps.component';
import { PostalBankAccountComponent } from './postal-bank-account/postal-bank-account.component';
import { ExpressAccountComponent } from './express-account/express-account.component';
import { PrepaidcardComponent } from './prepaidcard/prepaidcard.component';
import { MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { MobilepaymentComponent } from './mobilepayment/mobilepayment.component';


const routes: Routes = [
  { path: '', component: SplashScreenComponent, pathMatch: 'full' },
  { path: 'splash', component: SplashScreenComponent, },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'recharge-plan', component: RechargePlanComponent },
  { path: 'benificiary', component: BenificiaryComponent },
  { path: 'add-account', component: AddAccountComponent },
  { path: 'sendmoney', component: SendMoneyComponent },
  { path: 'sendvoucher', component: SendVoucherComponent },
  { path: 'kyc', component: KycComponent },
  { path: 'postoffice', component: PostofficeComponent },
  { path: 'parcels', component: ParcelsComponent },
  { path: 'mailservices', component: MailServicesComponent },
  { path: 'expressmail', component: ExpressMailComponent },
  { path: 'stamps', component: StampsComponent },
  { path: 'postalbankaccount', component: PostalBankAccountComponent },
  { path: 'expressaccount', component: ExpressAccountComponent },
  { path: 'prepaidcard', component: PrepaidcardComponent },
  { path: 'moneytransfer', component: MoneytransferComponent },
  { path: 'mobilepayment', component: MobilepaymentComponent },
  { path: 'facecapture', component: FaceCaptureComponent },
  { path: 'fingerprintscan', component: FingerprintScanComponent },
  { path: 'verifybiometric', component: VerifyBiometricComponent },
  { path: 'zaincronws/portal/zain/redirect', component: CallbackComponent },
];
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
