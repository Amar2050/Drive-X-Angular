import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/Driver';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  drivers:any;

  // pilote: Driver = new Driver("mister bean","angleterre","https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/RowanAtkinsonMar07.jpg/1024px-RowanAtkinsonMar07.jpg" , "formule 1");
  
  constructor(private data:DataService) { 
    this.drivers = this.data.getAllDrivers();
  }

  ngOnInit(): void {
    // console.log(this.pilote);
  }


}
