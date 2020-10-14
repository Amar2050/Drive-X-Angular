import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  
  // Dans la classe Enfant je récupére la donnée de la classe Parent
  //Le décorateur @Input() me permet de récuperer une donnée depuis une autre classe
  @Input()vehicule:any;

  constructor() { }

  ngOnInit(): void {
  }

}
