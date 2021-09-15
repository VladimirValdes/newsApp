import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient) { }


  getNewsByCategory( category = 'general', pSize = 10, page = 1 ) {
    return this.http.get(`${ base_url }/everything?q=${ category }&pageSize=${ pSize }&page=${ page }`)
                    .pipe( 
                      map( ( resp: any ) => {
                          return resp.articles;
                      })
                    )
  }
  
}
