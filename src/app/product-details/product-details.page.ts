import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

import { ProductsService } from '../services/products.service';
import {PageDetailsService} from '../services/page-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  public item_qty:any;
  wishListStatus: any;
  prodID: any;
  inWishlist: boolean = false;
  wishlistItems: any[] = [];
  wishlistIndex: any;
  itemIn: any;
  cartList: any[] = [];
  userDetails: any[] = [];
  showCartCount: boolean = false;
  userBR: any;

  constructor(public productsService: ProductsService, private route: ActivatedRoute, public storage: Storage, public toastController: ToastController, public pageDetail: PageDetailsService) {

  }

  ngOnInit() {
    this.pageDetail.showCount();
    this.pageDetail.showBRPoints();

    let itemId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log("Page ID:" , itemId);

    this.storage.ready().then( (data)=>{

      this.storage.get("wishlist").then( (data)=>{

        if ( data == null || data.length == 0 ) {
          console.log("Wishlist Empty!");
          this.inWishlist = false;

        } else {

          this.itemIn = data.findIndex(x => x.id === itemId);
          console.log(this.itemIn);

          for( let i = 0; i < data.length; i++ ) {
            
            if (itemId === data[i].id) {
              this.inWishlist = true;
              this.wishlistIndex = i;
              console.log("Index:", this.wishlistIndex);
            } 
  
          }
        }

      });
    });

    this.item_qty = 1;
  }

  public replaceIMG(imgString) {
    var newstr = imgString.replace("beta.", "");
    return '<img src="' + newstr + '">';
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

    this.pageDetail.setCartCount(1);
    this.pageDetail.setBRPoints(parseFloat(product.price) * pQty);

    this.storage.get("cart").then((data) => {

      if ( data == null || data.length == 0 ) {
        data = [];

        data.push({
          "product": product,
          "qty": pQty,
          "amount": parseFloat(product.price) * pQty
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
          data.push({
            "product": product,
            "qty": pQty,
            "amount": parseFloat(product.price) * pQty
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

  toggleWishlist(product) {
    if (this.inWishlist === false) {
      this.addWishItem(product);
    } else if (this.inWishlist === true) {
      this.removeWishItem(product, this.wishlistIndex);
    }
  }

  async addWishItem(product) {
    this.storage.get("wishlist").then((data) => {

      if ( data == null || data.length == 0 ) {
        data = [];

        data.push({
          "product": product,
          "id": product.id
        });
      } else {
        data.push({
          "product": product,
          "id": product.id
        });
      }

      this.storage.set("wishlist", data).then( ()=>{

        this.wishlistIndex = (data.length - 1);
        console.log("Wishlist Updated");
        console.log(data);

        this.ySuccess();

      })
      
    });

    this.inWishlist = true;
  }

  async removeWishItem(item, i) {

    this.storage.get("wishlist").then((data) => {

      data.splice(i, 1);

      this.storage.set("wishlist", data).then( ()=>{

        console.log("Wishlist Updated (Remove)");
        console.log(data);
        this.inWishlist = false;

        this.ySuccess();

      })
      
    });
    
  }

  async ySuccess() {
    const toast = await this.toastController.create({
      message: 'Wishlist Updated',
      color: "dark",
      duration: 3000
    });
    toast.present();
  }

}
