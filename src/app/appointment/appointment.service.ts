import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppointmentService {
  private serverUrl = "http://localhost:3000/api";

  constructor(private http: Http){}
  
  get(date): Observable<any> {
    return this.http.get(this.serverUrl + '/appointment/date/' + date)
           .map((res: Response) => {
              return res.json();
           }).catch((error) => {
             return error.json().error;
           });;
  }

  getByMonth(month): Observable<any> {
    return this.http.get(this.serverUrl + '/appointment/month/' + month)
           .map((res: Response) => {
              return res.json();
           }).catch((error) => {
             return error.json().error;
           });;
  }
}
