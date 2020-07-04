import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {ListService} from 'src/app/services/list.service';
import { Message, ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [ConfirmationService]
})
export class CountryComponent implements OnInit {
  countryStat: any;
  cols: any[];
  colls: any[];
  globalStat: any;
  first = 0;
  rows = 12;
  selectedValues: any[];
  loading = true;
  messageService: any;
  oneCountry: any;
  data: any[];
  msgs: Message[] = [];
  country: string;
  cases: string;
  c1 = [];
  c2 = [];
  constructor(private dataService:DataService , private listData: ListService) { }
  confirm1(selectedItem : any)
   {
    this.country = selectedItem.country_name;
    
    console.log('Country', this.country);
  
    this.c1.push(this.country);
    this.c2 = this.c1;
    console.log('Array', this.c2);
    this.listData.updateData(this.c2);
  }

  ngOnInit(): void {

    this.listData.currentMessage.subscribe(() => this.country = this.country);
  
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