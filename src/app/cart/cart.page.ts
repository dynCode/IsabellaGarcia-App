import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems: any[] = [];
  total: any;

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, private storage: Storage) { 

    this.storage.ready().then( (data)=>{

      this.storage.get("cart").then( (data)=>{
        this.cartItems = data;
        console.log(this.cartItems);
      })

    })

  }

  ngOnInit() {
  }

}
