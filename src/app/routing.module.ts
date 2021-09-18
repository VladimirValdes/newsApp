import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { pagesRountingModule } from './pages/pages.routing';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'category/:name', component: CategoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PagesComponent }
];




@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
