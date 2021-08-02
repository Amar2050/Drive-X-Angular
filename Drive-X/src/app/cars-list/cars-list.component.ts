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

  voiture: Car = new Car("peugeot L750 r" , "France" , "https://www.largus.fr/images/images/peugeot-l750-r-hybrid-gran-turismo-7-.jpg" );
  
  constructor(private data:DataService) { 
    this.cars = this.data.getAllCars();
    this.data.cars.push(this.voiture);
  }

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

}
