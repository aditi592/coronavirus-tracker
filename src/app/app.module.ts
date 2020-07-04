import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {DataService} from './services/data.service';
import {ListService} from './services/list.service';
import { TableModule } from 'primeng/table';
import { CountryComponent } from './components/country/country.component';
import { GlobalComponent } from './components/global/global.component';
import { IndiaComponent } from './components/india/india.component';
import { MyListComponent } from './components/my-list/my-list.component';

import {CheckboxModule} from 'primeng/checkbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ButtonModule} from 'primeng/button';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    GlobalComponent,
    IndiaComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CheckboxModule,
    ConfirmDialogModule,
    ButtonModule,
    MessagesModule,
    
  ],
  providers: [DataService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
