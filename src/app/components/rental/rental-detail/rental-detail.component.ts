import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentalService} from '../rental.service';
import {Rental} from '../rental.model';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService,
  ) { }

  rental: Rental;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.rentalService.getRentalById(param['id']).subscribe((rental: Rental) => this.rental = rental);
    });
  }

}
