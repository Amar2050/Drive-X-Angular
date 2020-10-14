import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  // L'utilisateur est connécté on récupére son prénom via cette méthode
  getFirstname(){
    return "Saladin";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
