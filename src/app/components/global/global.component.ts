import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
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
    this.colls = [{ field: 'active_cases' }];
  }

}
