import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../../service/countries-service.service';
import { Country, RegionalBloc } from '../../../models/interface.response';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  search: any = [];
  countries: any = [];
  filterCountry = '';
  constructor(private _countriesService: CountriesServiceService) {}

  ngOnInit() {
    this._countriesService.getCountries().subscribe((resp) => {
      this.countries = resp;
    });
  }

  listRegions(region: string) { 
    
    this._countriesService.getSelectRegion(region).subscribe((resp) => {
      this.countries = resp;
    });
  
  }

  listSearchCountries(country: string){
    this._countriesService.getSearchCount(country).subscribe((resp) => {
      this.countries = resp;
    });
  }

  onSearchCountries(search: string) {
    this.search = search;
  }
}
