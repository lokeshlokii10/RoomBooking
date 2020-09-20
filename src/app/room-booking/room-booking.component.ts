import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss'],
})
export class RoomBookingComponent implements OnInit {
  roomCounts = 1;
  adultCounts = 0;
  chlidCounts = 0;
  bookingRooms: any;
  roomAddButton: boolean = false;
  roomSubButton: boolean = true;
  adultAddButton: boolean = false;
  adultSubButton: boolean = true;
  childAddButton: boolean = false;
  childSubButton: boolean = true;
  constructor() {}

  ngOnInit() {}

  addCounts(e) {
    if (e === 'roomPlus') {
      if (this.roomCounts === 4) {
        this.roomCounts = this.roomCounts + 1;
        this.roomAddButton = true;
      } else {
        this.roomCounts = this.roomCounts + 1;
      }
      if (this.roomCounts === 1) {
        this.adultCounts = this.adultCounts + 1;
      }
      if (this.roomCounts === 3) {
        this.adultCounts = 3;
      }
      this.roomSubButton = false;
    }
    if (e === 'adultPlus') {
      const totalCount = this.adultCounts + this.chlidCounts;
      if (totalCount === 19 ) {
        this.adultCounts = this.adultCounts + 1;
        this.roomCounts = Math.ceil((this.adultCounts + this.chlidCounts) / 4);
        this.adultAddButton = true;
        this.childAddButton = true;
      } else {
        this.adultCounts = this.adultCounts + 1;
        this.roomCounts = Math.ceil((this.adultCounts + this.chlidCounts) / 4);
      }
      if (this.adultCounts > 0) {
        this.adultSubButton = false;
      }
    }
    if (e === 'childPlus') {
      const totalCount = this.adultCounts + this.chlidCounts;
      if (totalCount === 19 ) {
        this.chlidCounts = this.chlidCounts + 1;
        this.roomCounts = Math.ceil((this.adultCounts + this.chlidCounts) / 4);
        this.adultAddButton = true;
        this.childAddButton = true;
      } else {
        this.chlidCounts = this.chlidCounts + 1;
        this.roomCounts = Math.ceil((this.adultCounts + this.chlidCounts) / 4);
      }
      if (this.chlidCounts > 0) {
        this.childSubButton = false;
      }
    }
  }

  deleteCounts(e) {
    if (e === 'roomMinus') {
      if (this.roomCounts === 1) {
      this.roomSubButton = true;
      } else {
        this.roomCounts = this.roomCounts - 1;
      }
      this.roomAddButton = false;
    }
    if (e === 'adultMinus') {
      const totalCount = this.adultCounts + this.chlidCounts;
      if (this.adultCounts === 1 ) {
        this.adultCounts = this.adultCounts - 1;
        this.roomCounts = Math.ceil((this.adultCounts + this.chlidCounts) / 4);
        this.adultSubButton = true;
      } else {
        this.adultCounts = this.adultCounts - 1;
        this.roomCounts = Math.ceil((this.adultCounts + this.chlidCounts) / 4);
      }
      this.childAddButton = false;
      this.adultAddButton = false;
    }
    if (e === 'childMinus') {
      if (this.chlidCounts === 1 ) {
        this.chlidCounts = this.chlidCounts - 1;
        this.roomCounts = Math.ceil((this.adultCounts + this.chlidCounts) / 4);
        this.childSubButton = true;
      } else {
        this.roomCounts = Math.ceil((this.adultCounts + this.chlidCounts) / 4);
        this.chlidCounts = this.chlidCounts - 1;
      }
      this.childAddButton = false;
      this.adultAddButton = false;
    }
  }
}
