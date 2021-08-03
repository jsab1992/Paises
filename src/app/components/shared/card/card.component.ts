import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../../service/countries-service.service';
import { Country } from '../../../models/interface.response';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  countries: any = [];
  filterCountry = '';

  constructor(private _countriesService: CountriesServiceService) {}

  ngOnInit() {

    this._countriesService.getCountries().subscribe((resp) => {
      this.countries = resp;
      // console.table( resp );
      console.log(this.countries.name);
    });
  }
}
