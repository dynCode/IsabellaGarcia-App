import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
		this.productsService.loadProducts();
		console.log(this.productsService.allProducts);
	}

}
