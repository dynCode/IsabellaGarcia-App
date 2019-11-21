import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';
import {PageDetailsService} from '../services/page-details.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  listItems: any[] = [];
  total: any;
  showEmptyListMessage: boolean = false;
  cartList: any[] = [];
  userDetails: any[] = [];
  showCartCount: boolean = false;
  userBR: any;
  searchQuery: any;

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, public storage: Storage, public pageDetail: PageDetailsService) { }

  ngOnInit() {
    this.total = 0.0;

    this.pageDetail.showCount();
    this.pageDetail.showBRPoints();

    this.storage.ready().then( (data)=>{

      this.storage.get("wishlist").then( (data)=>{
        this.listItems = data;
        console.log("Wishlist Items",this.listItems);

        if (this.listItems.length > 0 || this.listItems.length !== null) {

          this.listItems.forEach( (item, index)=>{
            this.total = this.total + (item.product.price * item.qty)
          });

        } else {
          this.showEmptyListMessage = true;
        }

      });

    });
  }

  public replaceIMG(imgString) {
    var newstr = imgString.replace("beta.", "");
    return '<img src="' + newstr + '">';
  }

  removeFromList(item, i) {

    let price = item.product.price;
    let qty = item.qty;

    this.listItems.splice(i, 1);

    this.storage.set("wishlist", this.listItems).then( ()=> {

      this.total = this.total - (price * qty);

    });

    if (this.listItems.length == 0 || this.listItems.length == null) {
      this.showEmptyListMessage = true;
    }

  }
  
  public getProdDet(id){
    this.productsService.ProductDetails(id);
		console.log(this.productsService.productDetails);
  }

  public searchByKeyword() {
    console.log("SEARCH", this.searchQuery);
    this.productsService.searchResults(this.searchQuery, 1);
  }

  /*getCartCount() {
    this.storage.get("cart").then( (data)=>{
      this.cartList = data.length;

      if (this.cartList.length > 0 || this.cartList.length !== null) {
        this.showCartCount = true;
      } 

    });

    return '<ion-badge>' + this.cartList + '</ion-badge>';
  }*/

}
