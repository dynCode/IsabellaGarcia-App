import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(public productsService: ProductsService, private route: ActivatedRoute, public storage: Storage, public toastController: ToastController) { }

  public item_qty:any;

  ngOnInit() {

    this.item_qty = 1;
    //let id = this.route.snapshot.paramMap.get('id');

    //this.productsService.ProductDetails(id);
		//console.log(this.productsService.productDetails);
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

    this.storage.get("cart").then((data) => {

      if ( data == null || data.length == 0 ) {
        data = [];

        data.push({
          "product": product,
          "qty": pQty,
          "amount": parseFloat(product.price) * pQty
        });
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

}
