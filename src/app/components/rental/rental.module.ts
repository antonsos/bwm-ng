import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalItemComponent } from './rental-item/rental-item.component';

import {RentalService} from './rental.service';
import {RouterModule} from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import {RentalRoutingModule} from './rental-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RentalRoutingModule,
  ],
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalItemComponent,
    RentalDetailComponent,
  ],
  exports: [
    RentalComponent,
    RentalListComponent,
    RentalItemComponent,
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule { }
