import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  globalStat: any;
  countryStat: any;
  cols: any[];
  loading = true;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getGlobalData().subscribe((res) => {
      this.globalStat = res;
      console.log('global', this.globalStat);
    });

    this.dataService.getCountryData().subscribe((res: any) => {
      this.countryStat = res.countries_stat;
      console.log('country', this.countryStat);
      this.loading = false
    });

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

}
