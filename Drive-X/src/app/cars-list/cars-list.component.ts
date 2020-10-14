import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  //Je déclare un objet de type any car il n'a pas encore de model

  game:any = {
    title:"Battlefield 3",
    support: "PC",
    multi: 64
  }

  constructor() { }

  ngOnInit(): void {
  }

}
