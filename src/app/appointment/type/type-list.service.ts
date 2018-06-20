import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppointmentTypeService {
  private serverUrl = "http://localhost:3000/api";

  constructor(private http: Http){}
  
  get(): Observable<any> {
    return this.http.get(this.serverUrl + '/type')
           .map((res: Response) => {
              return res.json();
           }).catch((error) => {
             return error.json().error;
           });;
  }
}
