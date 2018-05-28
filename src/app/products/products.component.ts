import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageProductComponent } from './image-product/image-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsSource = [];

  constructor(private productService: ProductService, public dialog: MatDialog) { }

  openDialog(image): void {
    let dialogRef = this.dialog.open(ImageProductComponent, {
      width: '800px',
      height: '600px',
     // data: { name: this.name, animal: this.animal }
      data: {image: image}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  ngOnInit() {
    this.productService.get().subscribe((products) => {
      this.productsSource = products;
    }, (err) => {
      console.log(err);
    });
  }

  

}
