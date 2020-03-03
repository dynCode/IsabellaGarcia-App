import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';
import {PageDetailsService} from '../services/page-details.service';

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
  searchQuery: any;

  slideOpts = {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 10,
  };

  toHTML(input) : any {
    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
  }

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, public storage: Storage, public pageDetail: PageDetailsService) { 
  }

  ngOnInit() {

    this.storage.ready().then( (data)=>{
      this.storage.get("availableBR").then( (data)=> {
        this.userBR = data;
      })
    })

    this.pageDetail.showCount();
    this.pageDetail.showBRPoints();

		this.productsService.loadProducts();
    console.log(this.productsService.allProducts);

    this.productsService.loadWMProducts();
    console.log(this.productsService.allWMProducts);

    this.productsService.loadMMProducts();
    console.log(this.productsService.allMMProducts);
    
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

  public searchByKeyword() {
    console.log("SEARCH", this.searchQuery);
    this.productsService.searchResults(this.searchQuery, 1);
  }
}
