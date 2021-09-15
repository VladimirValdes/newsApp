import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterceptorsService {

  constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const headers = new HttpHeaders({
        'X-Api-Key': '1cd1f840fba04a93aca1ff8aec312219'
      });

      const reqClone = req.clone({
        headers
      });
      
      return next.handle( reqClone );
  
    }

}
