import {Component, Input, OnInit} from '@angular/core';
import {Rental} from '../rental.model';

@Component({
  selector: 'app-rental-item',
  templateUrl: './rental-item.component.html',
  styleUrls: ['./rental-item.component.scss']
})
export class RentalItemComponent implements OnInit {

  constructor() { }

  @Input() rental: Rental;

  ngOnInit() {
  }

}
