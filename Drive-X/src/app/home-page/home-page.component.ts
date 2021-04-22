import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  bestCars:any;
  bestDrivers:any;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.bestCars = this.data.getNbPowerfullCars(2);
    this.bestDrivers = this.data.getNbBestDrivers(3);
  }

}
