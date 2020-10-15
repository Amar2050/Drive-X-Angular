import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = 'Drive-X';

  // On déclare une variable sans valeur
  username:string;

  constructor() { }

  ngOnInit(): void {
  }

}
