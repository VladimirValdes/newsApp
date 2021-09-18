import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';



const routes: Routes = [
    { path: 'home', component: PagesComponent,
      children: [
          { path: '', component: HomeComponent},
          { path: 'category/:name', component: CategoryComponent }
         
      ]},
      // { path: 'category/:name', component: CategoryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class pagesRountingModule {}
