import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { PipesModule } from '../pipes/pipes.module';
import { CardComponent } from './card/card.component';
import { DirectivesModule } from '../directives/directives.module';
import { HeroComponent } from './hero/hero.component';
import { SliderComponent } from './slider/slider.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardComponent,
    HeroComponent,
    SliderComponent,
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    RouterModule
  ],
  exports: [
    CategoriesComponent,
    CardComponent,
    SliderComponent,
    SubMenuComponent
  ]
})
export class ComponentsModule { }
