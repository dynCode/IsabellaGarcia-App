import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  cartList: any[] = [];
  userDetails: any[] = [];
  showCartCount: boolean = false;
  userBR: any;

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, public storage: Storage) {  }

  ngOnInit() {
		this.productsService.loadProducts();
    console.log(this.productsService.allProducts);
    
    this.authenticationService.displayCustomer();

    this.storage.ready().then( (data)=>{
      this.storage.get("cart").then( (data)=>{
        this.cartList = data.length;

        if (this.cartList.length > 0 || this.cartList.length !== null) {
          this.showCartCount = true;
        } 

      });

      this.storage.get("user").then( (data)=>{
        this.userDetails = data;
        this.userBR = this.userDetails[0].brPoints;
      });
    });
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
