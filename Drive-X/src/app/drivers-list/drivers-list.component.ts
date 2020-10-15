import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Je crée une simple méthode qui déclenche une alert JS classique
  // le term on est une convention pour un evénement onMouseScroll ect ect
  onButtonClick(){
    alert("Yes les events c'est mieux comme ça !");
  }

}
