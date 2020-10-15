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

  // La méthode créer peut faire n'importe quoi et etre lié a tout type d'event JS
  onMouseOver(){
    console.log("En effet c'est tout simple");
  }

}
