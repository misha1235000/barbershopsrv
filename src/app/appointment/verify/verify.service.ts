// verify.service

import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VerifyService {
  private serverUrl = "http://localhost:3000/api";

  /**
   * Injection of the http service.
   * @param http
   */
  constructor(private http: Http){}

  /**
   * Sends http POST request to send sms to a specified user.
   * @param user - The user to send the SMS to
   */
  sendSMS(user): Observable<any> {
    return this.http.post(this.serverUrl + '/sms', {'user': user})
           .map((res: Response) => {
              return res.json();
           }).catch((error) => {
             return error.json().error;
           });
  }

  /**
   * 
   * @param code - The verification code that has been entered.
   * @param reqId - The requestId that has been generated at the SMS send.
   * @param appointment - The appointment to send after the code has been verified.
   * @param user - The user that is sending the code verification
   */
  verifyCode(code, reqId, appointment, user): Observable<any> {
    return this.http.post(this.serverUrl + '/verify', {'code': code, 'request_id': reqId, 'appointment': appointment, 'user': user})
           .map((res: Response) => {
              return res.json();
           }).catch((error) => {
              return error.json().error;
           });
  }

  /**
   * Checks whether the phone exists in the db or not.
   * @param phone - The phone that has been entered.
   */
  isPhoneExist(phone): Observable<any> {
    return this.http.post(this.serverUrl + '/exist', {'phone': phone})
           .map((res: Response) => {
             return res.json();
           }).catch((error) => {
             return error.json().error;
           });
  }
}
