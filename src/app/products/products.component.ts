// products.component

import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageProductComponent } from './image-product/image-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsSource = [];

  /**
   * The Injection of the product service and the Material dialog.
   * @param productService - The service of the products that get injects.
   * @param dialog - The dialog that get injects.
   */
  constructor(private productService: ProductService, public dialog: MatDialog) { }

  /**
   * Opens the dialog of an image.
   * @param image - The image that will appear in the dialog.
   */
  openDialog(image): void {
    let dialogRef = this.dialog.open(ImageProductComponent, {
      width: '800px',
      height: '600px',
      data: {image: image}
    });
  }

  ngOnInit() { // Gets the products when the component inits.
    this.productService.get().subscribe((products) => {
      this.productsSource = products;
    }, (err) => {
      console.log(err);
    });
  }
}