import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { HomeComponent } from './components/home/home.component';
import { GlobalComponent } from './components/global/global.component';
import { IndiaComponent } from './components/india/india.component';
import { MyListComponent } from './components/my-list/my-list.component';

const routes: Routes = [
  {path:"",redirectTo:"/home", pathMatch :"full"},
  {path:"country",component : CountryComponent},
  {path:"global",component : GlobalComponent},
  {path:"home",component : HomeComponent},
  {path:"india",component : IndiaComponent},
  {path:"myList",component : MyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
