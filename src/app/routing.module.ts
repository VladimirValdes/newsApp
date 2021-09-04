import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { pagesRountingModule } from './pages/pages.routing';
import { PagesComponent } from './pages/pages.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PagesComponent },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    pagesRountingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
