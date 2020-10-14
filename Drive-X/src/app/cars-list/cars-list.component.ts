import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  // Je déclare 3 variables qui represente ma liste de véhicule
  // Ces données vont etre envoyées aux components enfants 
  vehiculeUn:string = "Mercedes AMG";
  vehiculeDeux:string ="Range Rover Evoque";
  vehiculeTrois:string ="Ferrari F50";

  constructor() { }

  ngOnInit(): void {
  }

}
