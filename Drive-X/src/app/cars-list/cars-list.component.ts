import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  //Je déclare une variable de type string et je la type

  test:string = "Ceci est un texte";

  unNombre:number= 21;


  constructor() { }

  ngOnInit(): void {
  }

}
