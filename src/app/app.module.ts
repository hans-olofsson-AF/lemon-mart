import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { ArbetsgivareModule } from './arbetsgivare/arbetsgivare.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { KontaktpersonService } from './services/kontaktperson.service';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ArbetsgivareModule
  ],
  providers: [KontaktpersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
