import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../../models/interface.response';
import { hostViewClassName } from '@angular/compiler';

@Injectable()
export class CountriesServiceService {
  allCountries = 'https://restcountries.eu/rest/v2/all';
  searcCountries = 'https://restcountries.eu/rest/v2/name/';
  listRegions = 'https://restcountries.eu/rest/v2/region/';
  

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<Country>(`${this.allCountries}`);
  }

  getSelectRegion(region: string ) {
   return this.http.get<Country>(`${this.listRegions}${region}`);
  }

  getSearchCount(country: string){
   return this.http.get<Country>(`${this.searcCountries}${country}?fullText=false`);
  }
}
