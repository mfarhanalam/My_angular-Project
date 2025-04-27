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


const routes: Routes = [
  { path: '', component: SplashScreenComponent, pathMatch: 'full' },
  { path: 'splash', component: SplashScreenComponent, },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'myrofile', component: MyprofileComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'recharge-plan', component: RechargePlanComponent },
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
