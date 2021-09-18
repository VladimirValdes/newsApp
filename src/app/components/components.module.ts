import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { PipesModule } from '../pipes/pipes.module';
import { CardComponent } from './card/card.component';
import { DirectivesModule } from '../directives/directives.module';
import { HeroComponent } from './hero/hero.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardComponent,
    HeroComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [
    CategoriesComponent,
    CardComponent,
    SliderComponent
  ]
})
export class ComponentsModule { }
