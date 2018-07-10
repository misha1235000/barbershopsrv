import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppointmentService {
  private serverUrl = "http://localhost:3000/api";

  /**
   * Injects the http.
   * @param http 
   */
  constructor(private http: Http){}
  
  /**
   * Sends http request to get appointments by a specific date.
   * @param date 
   */
  get(date): Observable<any> {
    return this.http.get(this.serverUrl + '/appointment/date/' + date)
           .map((res: Response) => {
              return res.json();
           }).catch((error) => {
             return error.json().error;
           });
  }

  /**
   * Sends http request to get appointments by a specific month.
   * @param month 
   */
  getByMonth(month): Observable<any> {
    return this.http.get(this.serverUrl + '/appointment/month/' + month)
           .map((res: Response) => {
              return res.json();
           }).catch((error) => {
             return error.json().error;
           });
  }
}
