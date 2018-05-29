import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-image-product',
  templateUrl: './image-product.component.html',
  styleUrls: ['./image-product.component.css']
})

export class ImageProductComponent implements OnInit {
  image;

  constructor(public dialogRef: MatDialogRef<ImageProductComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.image = data.image;
   }

  CloseImage(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

}
