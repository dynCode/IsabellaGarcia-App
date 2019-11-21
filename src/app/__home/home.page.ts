import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(public productsService: ProductsService) {}
	
	ngOnInit() {
		this.productsService.loadProducts();
		console.log(this.productsService.products);
	}
}