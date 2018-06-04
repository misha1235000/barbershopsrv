import { Component, OnInit } from '@angular/core';
import { VerifyService } from './verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  phone;

  constructor(private verifyService: VerifyService) { }

  ngOnInit() {
  }

  sendSMS() {
    this.verifyService.sendSMS(this.phone);
  }

}
