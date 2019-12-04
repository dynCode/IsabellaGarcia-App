import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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
  public item_qty:any;
  userData: any;

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, public storage: Storage, public pageDetail: PageDetailsService, public toastController: ToastController, private http: HttpClient) { 
    this.storage.ready().then( (data)=>{
      this.storage.get("user").then( (data)=>{
        console.log("user data", data);
        this.userData = data;
      })
    })
  }

  ngOnInit() {
    this.total = 0.0;

    this.pageDetail.showCount();
    this.pageDetail.showBRPoints();

    this.storage.ready().then( (data)=>{

      this.storage.get("wishlist").then( (data)=>{
        this.listItems = data;
        console.log("Wishlist Items",this.listItems);

        if (this.listItems) {
          if (this.listItems.length > 0 || this.listItems.length !== null) {

            this.listItems.forEach( (item, index)=>{
              this.total = this.total + (item.product.price * item.qty)
            });

          } else {
            this.showEmptyListMessage = true;
          }
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

  public minQty() {
    if (this.item_qty > 1) {
      this.item_qty --;
    }
  }
  public plusQty() {
    this.item_qty ++;

    console.log(this.item_qty);
  }

  addToCart(product, pQty) {

    this.pageDetail.setCartCount(pQty);
    this.pageDetail.setBRPoints(parseFloat(product.price) * pQty);

    this.storage.get("cart").then((data) => {

      if ( data == null || data.length == 0 ) {
        let cartKey = this.adToUcart(product.id,pQty);
        
        data = [];

        data.push({
          "product": product,
          "qty": pQty,
          "amount": parseFloat(product.price) * pQty,
          "cartKey": cartKey
        });
        /*this.storage.get("availableBR").then( (dataBR)=> {
          this.userBR = dataBR - (parseFloat(product.price) * pQty);
        })*/
        
      } else {

        let added = 0;

        for( let i = 0; i < data.length; i++ ) {
          
          if (product.id == data[i].product.id) {
            console.log("Product is already in the cart");

            let qty = data[i].qty;

            data[i].qty = qty + pQty;
            data[i].amount = parseFloat(data[i].amount) + (parseFloat(data[i].product.price) * pQty);
            added = 1;
             
          }
        }

        if (added == 0) {
          let cartKey = this.adToUcart(product.id,pQty);

          data.push({
            "product": product,
            "qty": pQty,
            "amount": parseFloat(product.price) * pQty,
            "cartKey": cartKey
          });
        }

      }

      this.storage.set("cart", data).then( ()=>{

        console.log("Cart Updated");
        console.log(data);

        this.uSuccess();

      })
      
    });

  }

  async uSuccess() {

    const toast = await this.toastController.create({
      message: 'Cart Updated',
      color: "dark",
      duration: 3000
    });
    toast.present();
  }

  adToUcart(pid,cqty) {
    console.log('I GOT funking here');
    var headers = new HttpHeaders({'Authorization': 'Bearer ' + this.userData[0].authToken});
    let httpOptions = {
      headers: headers
    };

    let postData = {
            "product_id": pid,
            "quantity": cqty
    }

    this.http.post("https://isabellagarcia.co.za/wp-json/cocart/v1/add-item", postData, httpOptions)
      .subscribe(ucdata => {
        console.log(ucdata);

        this.storage.get("cart").then((data) => {

          for( let i = 0; i < data.length; i++ ) {
            
            if (pid == data[i].product.id) {
              console.log("cart key added");
              data[i].cartKey = ucdata['key'];
            }
          }
    
          this.storage.set("cart", data).then( ()=>{
    
            console.log("Cart Updated");
            console.log(data);
    
            this.uSuccess();
    
          })
          
        });
       }, error => {
        console.log(error);
      });
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
