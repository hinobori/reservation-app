import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      if(productId) {
        this.product = products[+productId];
      }
    });
  }

}
