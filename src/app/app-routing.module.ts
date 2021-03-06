import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatesComponent } from './states/states.component';
import { VaccineComponent } from './vaccine/vaccine.component';

const routes: Routes = [
  {path:"Home", component:HomeComponent},
  {path:"States", component:StatesComponent},
  {path:"Vaccine", component:VaccineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
