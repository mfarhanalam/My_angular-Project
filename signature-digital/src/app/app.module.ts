import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import {ToastrModule  } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSignaturePadModule,
    ToastrModule.forRoot({
      positionClass :''
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
