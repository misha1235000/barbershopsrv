import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VerifyService {
  private serverUrl = "http://localhost:3000/api";

  constructor(private http: Http){}
  
  sendSMS(phone): Observable<any> {
    return this.http.post(this.serverUrl + '/sms', {'number': phone})
           .map((res: Response) => {
              return res.json();
           }).catch((error) => {
             return error.json().error;
           });;
  }
}
