import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BkImageDirective } from './bk-image.directive';
import { ActiveCDirective } from './active-c.directive';



@NgModule({
  declarations: [
    BkImageDirective,
    ActiveCDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BkImageDirective,
    ActiveCDirective
  ]
})
export class DirectivesModule { }
