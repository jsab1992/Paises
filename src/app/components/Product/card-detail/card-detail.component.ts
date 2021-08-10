import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language } from '../../../models/interface.response';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {

  id: string = '';
  nativeName: string = '';
  population: string = '';
  region: string = '';
  productDetail: string = '';
  subRegion: string = '';
  Capital: string = '';
  topLevelDomain: string = '';
  Languages: string = '';
  listCountry: any = [];
  countries: any = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // const nativeName = this.route.snapshot.paramMap.get('nativeName');
    // const population = this.route.snapshot.paramMap.get('population');
    // const region = this.route.snapshot.paramMap.get('region');
    // const subRegion = this.route.snapshot.paramMap.get('subRegion');
    // const Capital = this.route.snapshot.paramMap.get('Capital');
    // const topLevelDomain = this.route.snapshot.paramMap.get('topLevelDomain');
    // const Languages = this.route.snapshot.paramMap.get('Languages');
    const listCountry  = this.route.snapshot.paramMap.get('listCountry');
    
      // this.id += `${id}`;
      // this.nativeName += `${nativeName}`;
      // this.population += `${population}`;
      // this.region += `${region}`;
      // this.subRegion += `${subRegion}`;
      // this.Capital += `${Capital}`;
      // this.topLevelDomain += `${topLevelDomain}`;
      // this.Languages += `${Languages}`;
      this.listCountry += `${listCountry}`;
      this.countries = JSON.parse(this.listCountry);

    console.log('detalle'+JSON.parse(this.listCountry));
    console.log('detalle    '+this.countries);

  }
}
