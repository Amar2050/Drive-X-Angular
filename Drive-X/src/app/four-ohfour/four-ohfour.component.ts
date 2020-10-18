import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-four-ohfour',
  templateUrl: './four-ohfour.component.html',
  styleUrls: ['./four-ohfour.component.css']
})
export class FourOhfourComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    setTimeout( ()=>  {
      this.router.navigate(['/']);
    }, 4000);
  }

}
