import { Component, OnInit } from '@angular/core';
import { VerifyService } from './verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  fullname = "";
  phone;
  code;
  isVerify: boolean = false;
  resData;

  constructor(private verifyService: VerifyService) { }

  ngOnInit() {
    
  }

  sendSMS() {
    this.isVerify = true;

    this.verifyService.sendSMS(this.phone).subscribe((data) => {
      data = JSON.parse(data);
      console.log(data);
      if (data.error_text && data.status != "10") {
        this.isVerify = false;
      } else {
        this.resData = data;
      }
    }, (err) => {
      console.log(err);
    });
  }

  verifyCode() {
    this.verifyService.verifyCode(this.code, this.resData.request_id).subscribe((data) => {
      data = JSON.parse(data);
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
}
