import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BkImageDirective } from './bk-image.directive';



@NgModule({
  declarations: [
    BkImageDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BkImageDirective
  ]
})
export class DirectivesModule { }
