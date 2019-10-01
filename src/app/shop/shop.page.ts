import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService) {}

  ngOnInit() {
		this.productsService.loadProducts();
    console.log(this.productsService.allProducts);
    
    this.authenticationService.displayCustomer();
  }
  
  public getProdDet(id){
    this.productsService.ProductDetails(id);
		console.log(this.productsService.productDetails);
  }

  public replaceIMG(imgString) {
    var newstr = imgString.replace("beta.", "");
    return '<img src="' + newstr + '">';
  }

}
