// verify.component

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { VerifyService } from './verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  @Input() appointmentScheduled;
  @Output() finished = new EventEmitter<any>();

  fullname = "";
  phone = "";
  errorSMS: string;
  errorVerify: string;
  code = "";
  isVerify = false;
  isCode = false;
  isNameReq = false;
  isPhone = false;
  resSendSMSData: boolean;
  resVerifyData: any;
  request_id = "";

  /**
   * Inject the verify service.
   * @param verifyService 
   */
  constructor(private verifyService: VerifyService) { }

  ngOnInit() {}

  ngOnChanges() {}

  /**
   * Checks if the phone syntax is valid.
   */
  isValidPhone(): void {
    let terms = /^05\d{8}$/;
    if (terms.test(this.phone)) {
      this.verifyService.isPhoneExist(this.phone).subscribe((data) => {
        if (data.isExist) {
          this.isNameReq = false;
          this.isPhone = true;
        } else {
          this.isNameReq = true;
          this.isPhone = false;
        }
      });
    } else {
      this.isNameReq = false;
      this.isPhone = false;
    }
  }

  /**
   * Sends a verification SMS to a specific phone.
   */
   sendSMS(): void {
    let user = {'name': this.fullname, 'phone': this.phone};
    this.isVerify = true;
    this.errorSMS = ""
    this.isNameReq = false;
    this.request_id = "1bfbsoisagosh";
    this.resSendSMSData = true;
    /*
    this.verifyService.sendSMS(user).subscribe((data) => {
      if (typeof(data) == "string") { // If the data returns as string, parse it to json.
        data = JSON.parse(data);
      }

      if (data.error_text && data.status != "10") { // If the data returns error and the status is not 10 show an Error.
        this.errorSMS = data.error_text;
        this.isVerify = false;
      } else { // If no errors appeared.
        this.errorSMS = ""
        this.isNameReq = false;
        this.request_id = data.request_id;
        this.resSendSMSData = true;
      }
    }, (err) => {
      console.log(err);
    });
    */
  }

  /**
   * Verification of the code that was sent before.
   */
  verifyCode(): void {
    let appointment = {'datefrom': this.appointmentScheduled.date,
                       'dateto': this.appointmentScheduled.dateto,
                       'dateFilter': new Date(this.appointmentScheduled.date).getDate().toString() + "-" +
                                    (new Date(this.appointmentScheduled.date).getMonth() + 1).toString() + "-" +
                                     new Date(this.appointmentScheduled.date).getFullYear(),
                       'ownerPhone': this.phone ,'types':this.appointmentScheduled.types};
    let user = {'name': this.fullname, 'phone': this.phone};

    this.isCode = true;
    this.resVerifyData = true;
    this.finished.emit();
    /*
    this.verifyService.verifyCode(this.code, this.request_id, appointment, user).subscribe((data) => {
      if (typeof(data) == "string") { // If the data returns as string, parse it to json.
        data = JSON.parse(data);
      }
      
      if (data.error_text || !data.success) { // If the data has an error or it didnt success show the error.
        this.errorVerify = data.error_text;
        this.isCode = false;
      } else {
        this.errorVerify = "";

        if (data.success) { // If data.success exists emit that it was verified.
          this.resVerifyData = data;
          this.finished.emit();
        }
      }
    }, (err) => {
      console.log(err);
    });*/
  }
}