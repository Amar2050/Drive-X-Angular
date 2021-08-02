import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Car } from '../models/Car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carUpdate:any;

  cars: Car[];
  
  constructor(private data:DataService) { 
    this.cars = this.data.getAllCars();
  }

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

}
