import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';
import {PageDetailsService} from '../services/page-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems: any[] = [];
  total: any;
  showEmptyCartMessage: boolean = false;
  userBR: any;

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, public storage: Storage, public pageDetail: PageDetailsService) { 

    this.total = 0.0;

    this.storage.ready().then( (data)=>{

      this.storage.get("cart").then( (data)=>{
        this.cartItems = data;
        console.log(this.cartItems);

        if (this.cartItems.length > 0) {

          this.cartItems.forEach( (item, index)=>{
            this.total = this.total + (item.product.price * item.qty)
          })

        } else {
          this.showEmptyCartMessage = true;
        }

      })

    })

  }

  ngOnInit() {
  }

  public replaceIMG(imgString) {
    var newstr = imgString.replace("beta.", "");
    return '<img src="' + newstr + '">';
  }

  removeFromCart(item, i) {

    this.pageDetail.subCartCount();
    this.pageDetail.addBRPoints(item.product.price);

    let price = item.product.price;
    let qty = item.qty;

    this.cartItems.splice(i, 1);

    this.storage.set("cart", this.cartItems).then( ()=> {

      this.total = this.total - (price * qty);

      this.storage.get("availableBR").then( (data)=> {
        this.userBR = data - this.total;
  
        this.storage.set("availableBR", this.userBR).then( ()=> {
          console.log(this.userBR);
        })
      })

    });

    if (this.cartItems.length == 0 || this.cartItems.length == null) {
      this.showEmptyCartMessage = true;
    }

  }

  public getProdDet(id){
    this.productsService.ProductDetails(id);
		console.log(this.productsService.productDetails);
  }

}
