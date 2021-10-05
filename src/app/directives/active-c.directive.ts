import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appActiveC]'
})
export class ActiveCDirective {

  @Output() active: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('document:click', ['$event'])
   public clickOut( event: any ): void {
     

      // if (event.target == event.currentTarget) { 
      //   console.log(' I make click inside the div')
        
      //   return; }
      
      console.log(' I make click outside the div')
      // this.active.emit(false);

   }

   
  @HostListener('click', ['$event'])
  public clickIn( event: any ): void {
    

    //  if (event.target == event.currentTarget) { 
    //    console.log(' I make click inside the div')
       
    //    return; }
     
     console.log(' I make click inside the div')
    //  this.active.emit(false);

  }


}
