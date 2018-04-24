import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'cars', loadChildren: './cars-page/cars.module#CarsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
