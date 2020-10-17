import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
  

  // Je déclare une variable de type booléen 
  // Que j'utilise dans le template pour afficher ou non un element html
  isOnline:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


}
