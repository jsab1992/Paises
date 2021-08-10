import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  listCountry: any = [];
  countries: any = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const listCountry = this.route.snapshot.paramMap.get('listCountry');
    this.listCountry += `${listCountry}`;
    this.countries = JSON.parse(this.listCountry);
  }
}
