import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
  private serverUrl = "http://localhost:3000/api";

  /**
   * Injects the http service.
   * @param http 
   */
  constructor(private http: Http){}
  
  /**
   * Sends http get request to get products from the server.
   */
  get(): Observable<any> {
    return this.http.get(this.serverUrl + '/product')
           .map((res: Response) => {
              return res.json();
           }).catch((error) => {
             return error.json().error;
           });;
  }
}
