import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  IndiaStatURL = 'https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewise';
  CountryWiseStatURL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php'
  worldStatURL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php'
  constructor(private httpClient:HttpClient) { }

  getGlobalData() {
    const headers = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "49251608a4msh0ee9f3db2bc5bf4p1ad75ejsn318a3a643c91"
      })
    }
    
    return this.httpClient.get(this.worldStatURL,headers)
  }
  
  getCountryData() {
    const headers = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "49251608a4msh0ee9f3db2bc5bf4p1ad75ejsn318a3a643c91"
      })
    }

    return this.httpClient.get(this.CountryWiseStatURL,headers)
  }

  getIndiaData() {
    const headers = {
      
        headers: new HttpHeaders({
      "x-rapidapi-host": "coronavirus-tracker-india-covid-19.p.rapidapi.com",
      "x-rapidapi-key": "56bb86f2a2msh86183c17fc28025p1a3601jsnf33e46f129cb",
      "useQueryString": 'true'
    })
    };
    
    return this.httpClient.get(this.IndiaStatURL, headers);

  }

}

