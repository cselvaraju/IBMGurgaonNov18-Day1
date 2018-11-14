import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  
  veggies;
  newVeg: string;
  newPrice: number;
  message: string;
  
  constructor() { }

  ngOnInit() {
    this.veggies = [
      {name: 'Tomato', price: 12.55},
      {name: 'Brinjal', price: 25.44},
      {name: 'Potato', price: 17},
      {name: 'Pumpkin', price: 40.9}
    ];
    this.newVeg = '';
    this.newPrice = 0;
    this.message = 'Wow';
  }

  deleteVeg(ndx) {
    this.veggies.splice(ndx, 1);
  }

  addVeg() {
    this.veggies.push({
      name: this.newVeg,
      price: this.newPrice
    });
  }
}
