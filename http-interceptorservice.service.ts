import { HttpEvent, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorserviceService {
  constructor(private tockenextractor:HttpXsrfTokenExtractor ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    return next.handle(request);
    const headerName='token';
    const token=this.tockenextractor.getToken() as string
    if (token !=null && !request.headers.has(headerName)){
      request=request.clone({
      headers:request.headers.set(headerName,token)
      });
      
      }
      return next.handle(request);
  }
  
}
