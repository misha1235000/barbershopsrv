import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VerifyService } from './verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  @Output() finished = new EventEmitter<any>();
  fullname = "";
  phone: string = "";
  errorSMS;
  errorVerify;
  code: string = "";
  isVerify: boolean = false;
  isCode: boolean = false;
  resSendSMSData;
  resVerifyData;


  constructor(private verifyService: VerifyService) { }

  ngOnInit() {
    
  }

  isValidPhone(): boolean {
    let terms = /05\d{8}/;
    return terms.test(this.phone);
  }

  sendSMS() {
    this.isVerify = true;
    this.verifyService.sendSMS(this.phone).subscribe((data) => {
      data = JSON.parse(data);
      console.log(data);
      if (data.error_text && data.status != "10") {
        this.errorSMS = data.error_text;
        this.isVerify = false;
      } else {
        this.errorSMS = ""
        this.resSendSMSData = data;
      }
    }, (err) => {
      console.log(err);
    });
  }

  verifyCode() {
    this.isCode = true;
    this.verifyService.verifyCode(this.code, this.resSendSMSData.request_id).subscribe((data) => {
      data = JSON.parse(data);
      if (data.error_text) {
        this.errorVerify = data.error_text;
        this.isCode = false;
        console.log(data);
      } else {
        this.errorVerify = "";
        this.resVerifyData = data;
        this.finished.emit();
      }
      console.log(data);
    }, (err) => {
      console.log(err);
    });
    

  }
}
