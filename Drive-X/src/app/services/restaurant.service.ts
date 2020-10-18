import { Injectable } from '@angular/core';
import { BananeService } from './banane.service';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  name:string = "Le beBio";
  
  prixResto:number;
  
  constructor(private bana:BananeService) {
   }
  
   getPrice():number{
    return this.prixResto = this.bana.prix * 1.4;
   }

}
