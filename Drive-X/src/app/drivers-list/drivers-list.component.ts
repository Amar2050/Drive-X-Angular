import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
  
// Je déclare un tableau classique
 fruits:string[] = ["banane","pomme","fraise","peche"];


  constructor() { }

  ngOnInit(): void {
  }


}
