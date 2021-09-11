import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  
 

  transform( text: string, type = 'subtitle' ): string   {

    
    const characters =  text.split('').length;
    
    if ( type == 'title' && characters > 65) {

      text = text.slice(0, 65);
      text += '...';
     
    } else if ( characters > 90) {

      text = text.slice(0, 90);
      text += '...';
     
    } 

    

    return text;
  }

  

}
