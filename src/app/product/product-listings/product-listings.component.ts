import { Component, OnInit } from '@angular/core';
import { Product, products } from '../../products';

@Component({
  selector: 'app-product-listingsings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any

  constructor() {}
  ngOnInit() {
      this.products = products
  }
}
