import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../service/countries-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  regions: any = [];
  filterCountry = '';
  formsearchCountry!: FormGroup;
  

  constructor( private _countriesService: CountriesServiceService) { }
   
  ngOnInit(): void {
    this._countriesService.getRegion().subscribe((resp) => {
      this.regions = resp;
      console.table("regions " + this.regions);
      return this.regions;
    });
  }

}