import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewCarComponent } from './cars-list/new-car/new-car.component';
import { NewDriverComponent } from './drivers-list/new-driver/new-driver.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'cars', component: CarsListComponent},
  {path: 'new-car', component: NewCarComponent},
  {path: 'drivers', component: DriversListComponent},
  {path: 'new-driver', component: NewDriverComponent},
  {path: 'not-found', component: FourOhfourComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
