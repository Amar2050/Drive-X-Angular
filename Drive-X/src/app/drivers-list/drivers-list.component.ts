import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
  
 // Je définis une marge
  uneMarge:string = "-110px";

  // NgStyle me permet d'utiliser plusieurs variables ou méthodes pour un seul element du dom
  getColor(){
    return "aqua";
  }



  constructor() { }

  ngOnInit(): void {
  }


}
