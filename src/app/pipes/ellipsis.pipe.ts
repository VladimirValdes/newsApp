import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  
 

  transform( text: string, type = 'subtitle' ): string   {

    
    const characters =  text.split('').length;
    
    if ( type == 'title' && characters > 65) {

          text = text.slice(0, 65) + '...';
     
    } else if ( type == 'author' && characters > 18 ) {

      text = text.slice(0, 18) + '...';

    } else if ( characters > 115) {
        text = text.slice(0, 115) + '...';
    } 

  
    return text;
  }

  

}
