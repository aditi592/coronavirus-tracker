import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {DataService} from './services/data.service';
import { TableModule } from 'primeng/table';
import { CountryComponent } from './components/country/country.component';
import { GlobalComponent } from './components/global/global.component';
import { IndiaComponent } from './components/india/india.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    GlobalComponent,
    IndiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
