import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { PipesModule } from '../pipes/pipes.module';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    CategoriesComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
