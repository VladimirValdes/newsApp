import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { PipesModule } from '../pipes/pipes.module';
import { CardComponent } from './card/card.component';
import { DirectivesModule } from '../directives/directives.module';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    CategoriesComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
