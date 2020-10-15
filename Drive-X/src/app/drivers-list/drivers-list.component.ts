import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
  
  imgUrl:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  // On recupere la valeur de l'input pour la stocker dans une variable 
  // via property binding on utilise cette variable pour notre image 
  onButtonClick(inputValue:string){
    
    this.imgUrl = inputValue;

    return this.imgUrl;
  }

}
