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

  // Ma méthode prend en parametre une variable de type string et l'affiche dans un console log
  // La variable inputValue viens de mon champs input via la reference locale et donner en param 
  // A ma méthode ici présente , je fais un console log pour faire simple 
  onButtonClick(inputValue:string){
    console.log(inputValue);
  }

}
