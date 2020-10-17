import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
  
  // Je déclare une variable pour l'utilisé avec la directive d'attribut 
  // style.propriete
  couleur:string = "blue";

  // Je peux aussi utilisé une méthode avec ma directive d'attribut
  getColor(){
    return "aqua";
  }

  // Je déclare un booléen servant de déclencheur
  // On peut imaginer un bouton pour un mode nuit
  flag:boolean = true;

  colorA:string = "green";
  colorB:string = "grey";

  constructor() { }

  ngOnInit(): void {
  }


}
