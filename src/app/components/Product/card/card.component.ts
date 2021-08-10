import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../../service/countries-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../../models/interface.response';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  search: any = [];
  countries: any = [];
  filterCountry = '';
  productDetail: string = '';

  constructor(
    private _countriesService: CountriesServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const listCountry = this.route.snapshot.paramMap.get('listCountry');
    if (listCountry) {
      this.productDetail += `: ${listCountry}`;
    }
    console.log(JSON.stringify(listCountry).toString());

    this._countriesService.getCountries().subscribe((resp) => {
      this.countries = resp;
    });
  }

  SendData(listCountry: object) {
    this.router.navigate(['/cardDetail', JSON.stringify(listCountry)]);
  }

  listRegions(region: string) {
    this._countriesService.getSelectRegion(region).subscribe((resp) => {
      this.countries = resp;
    });
  }

  listSearchCountries(country: string) {
    this._countriesService.getSearchCount(country).subscribe((resp) => {
      this.countries = resp;
    });
  }

  onSearchCountries(search: string) {
    this.search = search;
  }
}
function sendData() {
  throw new Error('Function not implemented.');
}
