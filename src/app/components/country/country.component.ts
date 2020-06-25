import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countryStat: any;
  cols: any[];
  colls: any[];
  globalStat: any;
  first = 0;
  rows = 12;

  loading = true;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getGlobalData().subscribe((res) => {
      this.globalStat = res;
      console.log('global', this.globalStat);
    });

this.dataService.getCountryData().subscribe((res: any) => {
  this.countryStat = res.countries_stat;
  console.log('country', this.countryStat);
  this.loading = false
});
this.colls = [{ field: 'active_cases' }];
this.cols = [
  { field: 'country_name', header: 'Country' },
  { field: 'cases', header: 'Cases' },
  { field: 'deaths', header: 'Deaths' },
  { field: 'total_recovered', header: 'Recovered' },
  { field: 'new_cases', header: 'New Cases today' },
  { field: 'new_deaths', header: 'New Deaths today' },

];
}

scrollto(dest:string){
const el: HTMLElement|null = document.getElementById(dest);
if (el) {
  setTimeout(() =>
    el.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'}), 0);
}
}

next() {
this.first = this.first + this.rows;
}

prev() {
this.first = this.first - this.rows;
}

reset() {
this.first = 0;
}

isLastPage(): boolean {
return this.first === (this.countryStat.length - this.rows);
}

isFirstPage(): boolean {
return this.first === 0;
}
}

