import { Component, OnInit } from '@angular/core';
import { BananeService } from '../services/banane.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = 'Drive-X';

  // J'injecte mon service par injection de dépendance , 
  // en private pour limiter a cette classe et sans héritage possible
  // banane est la variable qui représente mon service entier
  constructor(private banane:BananeService) { 
    
    // j'utilise une méthode de mon service
    banane.getFruit();
  }

  ngOnInit(): void {
  }

}
