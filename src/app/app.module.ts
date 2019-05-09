import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_BOTTOM_SHEET_DEFAULT_OPTIONS} from '@angular/material';
import {APP_BASE_HREF} from '@angular/common';
import {AgeVerificationModule} from '@dm/verify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgeVerificationModule
  ],
  providers: [
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {ariaLabel: 'age verification dialog', disableClose: true, hasBackdrop: true}}
    , {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
