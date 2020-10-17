import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
  
  // on déclare une propriété 
  isCentred:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  // notre méthode retourne un booléen 
  onClick():boolean {
    // Si la propriété est vrai on la rend fausse et vice versa
    // 
    if(this.isCentred){
      return this.isCentred= false;
    }else{
      return this.isCentred = true;
    }
  };


}
