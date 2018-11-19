import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RentalListComponent} from './rental-list/rental-list.component';
import {RentalDetailComponent} from './rental-detail/rental-detail.component';
import {RentalComponent} from './rental.component';

const routes: Routes = [
  {path: 'rentals', component: RentalComponent, children: [
    {path: '', component: RentalListComponent},
    {path: ':id', component: RentalDetailComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class RentalRoutingModule { }
