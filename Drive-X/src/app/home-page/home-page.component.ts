import { Component, OnInit } from '@angular/core';
import { BananeService } from '../services/banane.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = 'Drive-X';

  prixBananeResto = this.resto.getPrice();

  constructor(private banane:BananeService, private resto:RestaurantService) { 
    
    this.banane.getFruit();
    
    console.log("Le nom du restaurant est " + this.prixBananeResto);
    
  }

  ngOnInit(): void {
  }

}
