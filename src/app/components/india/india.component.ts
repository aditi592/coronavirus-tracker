import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.scss']
})
export class IndiaComponent implements OnInit {

  
  indiaStat: any;
  colls: any[];
  loading = true;
  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.dataService.getIndiaData().subscribe((res) => {
      this.indiaStat = res;
      console.log('India', this.indiaStat);
      this.loading = false;
    });
    this.colls = [{ field: 'active_cases' }];
  }

}
