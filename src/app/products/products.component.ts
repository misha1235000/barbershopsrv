import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsSource = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.get().subscribe((products) => {
      this.productsSource = products;
    }, (err) => {
      console.log(err);
    });
  }

  

}
