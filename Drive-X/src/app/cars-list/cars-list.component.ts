import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {


  vehiculeUn:any =
  {
    title: "Mercedes AMG",
    price: 42000 
  } 

  vehiculeDeux:any =
  {
    title: "Range Rover Evoque",
    price: 55000
  }

  vehiculeTrois:any =
  {
    title: "Ferrari F50",
    price: 350000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
