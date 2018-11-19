import { Component, OnInit } from '@angular/core';
import {RentalService} from '../rental.service';
import {Rental} from '../rental.model';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  constructor(
    private rentalService: RentalService,
  ) { }

  message: string;

  rentals: Rental[] = [];

  ngOnInit() {
    this.rentalService.gerRentals().subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
      },
      (err) => {
        this.message = err;
        console.log(this.message);
      },
    );
  }

}
