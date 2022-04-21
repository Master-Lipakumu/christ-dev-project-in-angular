import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';

//import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path : 'home', component : HomeComponent },

  { path :'', redirectTo : 'home', pathMatch : 'full' },

  { path : '**', redirectTo : 'home', pathMatch : 'full' },
  
];


@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
