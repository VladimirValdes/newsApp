import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
