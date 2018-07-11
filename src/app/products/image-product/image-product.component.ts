// image-product.component

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-image-product',
  templateUrl: './image-product.component.html',
  styleUrls: ['./image-product.component.scss']
})

export class ImageProductComponent implements OnInit {
  image;

  /**
   * The injection of the dialog reference for the material design, and the DATA (Image).
   * @param dialogRef 
   * @param data 
   */
  constructor(public dialogRef: MatDialogRef<ImageProductComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.image = data.image;
   }

   /**
    * Closes the Dialog.
    */
  CloseImage(): void {
    this.dialogRef.close();
  }

  ngOnInit() { }
}