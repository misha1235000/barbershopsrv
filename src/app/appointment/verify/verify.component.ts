import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { VerifyService } from './verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  @Input() appointmentScheduled;
  @Output() finished = new EventEmitter<any>();

  fullname = "";
  phone: string = "";
  errorSMS;
  errorVerify;
  code: string = "";
  isVerify: boolean = false;
  isCode: boolean = false;
  isNameReq: boolean = false;
  isPhone: boolean = false;
  resSendSMSData;
  resVerifyData;


  constructor(private verifyService: VerifyService) { }

  ngOnInit() {
    
  }

  ngOnChanges() {
  }

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

  sendSMS() {
    let user = {'name': this.fullname, 'phone': this.phone};
    this.isVerify = true;
    this.verifyService.sendSMS(user).subscribe((data) => {
      if (typeof(data) == "string") {
        data = JSON.parse(data);
      }

      if(data.error_text && data.status == "100") {
        this.errorSMS = "";
        this.isNameReq = true;
        this.isVerify = false;
      } else if (data.error_text && data.status != "10") {
        this.errorSMS = data.error_text;
        this.isVerify = false;
      } else {
        this.errorSMS = ""
        this.resSendSMSData = true;
      }
    }, (err) => {
      console.log(err);
    });
  }

  verifyCode() {
    let newDate = new Date(this.appointmentScheduled.date);
    let appointment = {'datefrom': this.appointmentScheduled.date,
                       'dateto': this.appointmentScheduled.dateto,
                       'dateFilter': new Date(this.appointmentScheduled.date).getDate().toString() + "-" +
                                    (new Date(this.appointmentScheduled.date).getMonth() + 1).toString() + "-" +
                                     new Date(this.appointmentScheduled.date).getFullYear(),
                       'ownerPhone': this.phone ,'types':this.appointmentScheduled.types};
    let user = {'name': this.fullname, 'phone': this.phone};


    this.isCode = true;
    this.verifyService.verifyCode(this.code, this.resSendSMSData/*.request_id*/, appointment, user).subscribe((data) => {
      if (typeof(data) == "string") {
        data = JSON.parse(data);
      }
      
      if (data.error_text || !data.success) {
        this.errorVerify = data.error_text;
        this.isCode = false;
        console.log(data);
      } else {
        this.errorVerify = "";
        if (data.success) {
          this.resVerifyData = data;
          this.finished.emit();
        }
      }
      console.log(data);
    }, (err) => {
      console.log(err);
    });
    

  }
}
