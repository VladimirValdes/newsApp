import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { InterceptorsService } from '../interceptors/interceptors.service';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    DirectivesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorsService,
      multi: true
    }
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    PagesComponent,
    CategoryComponent
  ]
})
export class PagesModule { }
