import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  //Je déclare une variable de type number 
  //qui correspond a un stock de produit 

  stock:number = 19;

  //Prix de base sans réduction
  prix:number = 100;

  //Je crée une méthode simple qui me retourne le stock

  getStock(){
    return this.stock;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
