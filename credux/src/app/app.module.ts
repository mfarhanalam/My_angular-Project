import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RewardComponent } from './reward/reward.component';
import { ClaimnowComponent } from './claimnow/claimnow.component';
import { SpinComponent } from './spin/spin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RewardComponent,
    ClaimnowComponent,
    SpinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
