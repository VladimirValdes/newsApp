import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public newCategory: EventEmitter<string> = new EventEmitter<string>();


  constructor( private http: HttpClient) { }


  getNewsByCategory( category = 'general', sortBy = 'publishedAt', pSize = 10, page = 1 ) {
    return of([]);
    // return this.http.get(`${ base_url }/everything?q=${ category }&sortBy=${ sortBy}&pageSize=${ pSize }&page=${ page }`)
    //                 .pipe( 
    //                   map( ( resp: any ) => {
    //                       return resp.articles;
    //                   })
    //                 )
  }

  getTopNews( category: string, pSize = 10, page = 1) {
    return this.http.get(`${ base_url }/top-headlines?category=${ category }&pageSize=${ pSize }&page=${ page }`)
                    .pipe(
                      map( ( resp: any ) => {
                        return resp.articles;
                      })
                    )
  }

  showArticle( url: string ):void {
      window.open(url, "_blank");
  }


  
}
