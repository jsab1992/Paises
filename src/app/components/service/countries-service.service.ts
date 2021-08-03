import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../../models/interface.response';

@Injectable()
export class CountriesServiceService {
  baseURL = 'https://restcountries.eu/rest/v2/all';
  searchURL = 'https://restcountries.eu/rest/v2/name/af?fullText=false';
  regionURL = 'https://restcountries.eu/rest/v2/region/colombia';
  constructor(private http: HttpClient) {}

  getCountries(){
    return this.http.get<Country>(`${this.baseURL}`);
  }

  getSerchCountry(){
    return
  }

  getRegion(){
    return this.http.get<Country>(`${this.regionURL}`)
  }


}