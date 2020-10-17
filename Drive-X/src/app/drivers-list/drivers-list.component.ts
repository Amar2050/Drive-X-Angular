import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
  

  // Je crée un objet et je modifie le prix ou le rend null pour
  // simuler une réponse null de la bdd afin que le template s'adapate
  // grace à la directive structurelle ngIf utilisée
  
  book:any = {
    title: "Le rouge et le noir",
    price: 12
  }


  constructor() { }

  ngOnInit(): void {
  }


}
