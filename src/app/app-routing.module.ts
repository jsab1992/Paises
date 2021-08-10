import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardDetailComponent } from './components/Product/card-detail/card-detail.component';
import { CardComponent } from './components/Product/card/card.component';
import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  { path: 'home',  pathMatch: 'full', component: HomeComponent},
  // { path: 'card', redirectTo: 'CardComponent', pathMatch: 'full'},
  // { path: 'cardDetail', component: CardDetailComponent},
  { path: 'card/:listCountry', component: CardComponent},
  { path: 'cardDetail/:listCountry', component: CardDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
