import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  // Dans google image je fais un clic droit "copier l'adresse de l'image" 
  // et definis ma variable uneImage
  uneImage:string= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS36JfuWE1Cr8skNvMG8-XzDVesPMJs1Hjciw&usqp=CAU";

  // active ou non le bouton selon la condition qui sera a définir plus tard
  isButtonDisabled:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
