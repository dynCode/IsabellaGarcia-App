import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';
import {PageDetailsService} from '../services/page-details.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { LoadingController } from '@ionic/angular';

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
  options : InAppBrowserOptions = {
    location : 'yes',
    hideurlbar: "yes",
    presentationstyle : 'pagesheet',
  };
  userData: any;
  cartBr: any;
  totalBr: any;

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, public storage: Storage, public pageDetail: PageDetailsService,private iab: InAppBrowser,private http: HttpClient,private spinnerDialog: SpinnerDialog, public loadingController: LoadingController) { 
    this.total = 0.0;

    this.storage.ready().then( (data)=>{
      this.storage.get("user").then( (data)=>{
        this.userData = data;
        this.totalBr = data[0].brPoints;
      })

      this.storage.get("cart").then( (data)=>{
        this.cartItems = data;
        console.log("Items in Cart", this.cartItems);

        if (this.cartItems) {
          if (this.cartItems.length > 0) {

            this.cartItems.forEach( (item, index)=>{
              this.total = this.total + (item.product.price * item.qty);
            });

            if (this.total <= this.totalBr) { 
              this.cartBr = this.total;
              this.total = 0.00;
            } else {
              this.total = this.total-this.totalBr;
              this.cartBr = this.totalBr;
            }
          } else {
            this.showEmptyCartMessage = true;
          }
        }else {
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

  async minQty(item, i) {

    let loading = await this.loadingController.create({
			message: 'Updating cart totals...'
		});
		await loading.present();

    let nqty = item.qty;

    if (nqty > 1) {
      nqty --;
    }
    this.cartItems[i].qty = nqty;

    this.storage.get("cart").then((data) => {

      for( let p = 0; p < data.length; p++ ) {
        
        if (item.product.id == data[p].product.id) {
          console.log("Product is already in the cart");

          let qty = data[p].qty;

          data[p].qty = nqty;
          data[p].amount = parseFloat(data[p].amount) + (parseFloat(data[p].product.price) * nqty);
        }
      }

      this.storage.set("cart", data).then( ()=>{

        console.log("Cart Updated");
        console.log(data);

      })
    });

    var headers = new HttpHeaders({'Authorization': 'Bearer ' + this.userData[0].authToken});
    let httpOptions = {
      headers: headers
    };

    let postData = {
      "cart_item_key": item.cartKey,
      "quantity": nqty
    }

    this.http.post("https://isabellagarcia.co.za/wp-json/cocart/v1/item", postData, httpOptions)
      .subscribe(data => {
        console.log(data);
        loading.dismiss();
        this.recalCart();
        this.pageDetail.getBRPoints();
      }, error => {
        console.log(error);
        loading.dismiss();
    });
  }

  async plusQty(item, i) {

    let loading = await this.loadingController.create({
			message: 'Updating cart totals...'
		});
		await loading.present();
    let nqty = item.qty;

    nqty ++;

    this.cartItems[i].qty = nqty;
    this.storage.get("cart").then((data) => {

      for( let p = 0; p < data.length; p++ ) {
        
        if (item.product.id == data[p].product.id) {
          console.log("Product is already in the cart");

          let qty = data[p].qty;

          data[p].qty = nqty;
          data[p].amount = parseFloat(data[p].amount) + (parseFloat(data[p].product.price) * nqty);
        }
      }

      this.storage.set("cart", data).then( ()=>{

        console.log("Cart Updated");
        console.log(data);

      })
    });

    var headers = new HttpHeaders({'Authorization': 'Bearer ' + this.userData[0].authToken});
    let httpOptions = {
      headers: headers
    };

    let postData = {
      "cart_item_key": item.cartKey,
      "quantity": nqty
    }

    this.http.post("https://isabellagarcia.co.za/wp-json/cocart/v1/item", postData, httpOptions)
    .subscribe(data => {
      console.log(data);
      loading.dismiss();
      this.recalCart();
      this.pageDetail.getBRPoints();
    }, error => {
      console.log(error);
      loading.dismiss();
    });
  }

  removeFromCart(item, i) {

    this.pageDetail.subCartCount();
    //this.pageDetail.addBRPoints(item.product.price);

    let price = item.product.price;
    let qty = item.qty;

    this.cartItems.splice(i, 1);

    this.storage.set("cart", this.cartItems).then( ()=> {

      this.storage.get("availableBR").then( (data)=> {
        this.userBR = data - this.total;
  
        this.storage.set("availableBR", this.userBR).then( ()=> {
          console.log(this.userBR);
        })
      })

    });

    this.removeUcart(item.cartKey);

    this.recalCart();
    this.pageDetail.getBRPoints();
  }

  removeUcart(ckey) {
    var headers = new HttpHeaders({'Authorization': 'Bearer ' + this.userData[0].authToken});
    let httpOptions = {
      headers: headers
    };

    this.http.delete("https://isabellagarcia.co.za/wp-json/cocart/v1/item?cart_item_key="+ckey, httpOptions)
    .subscribe(data => {
      console.log(data);
      }, error => {
      console.log(error);
    });
  }

  public getProdDet(id){
    this.productsService.ProductDetails(id);
		console.log(this.productsService.productDetails);
  }

  public openWithInAppBrowser(){
    let target = "_blank";
    const browser = this.iab.create("https://isabellagarcia.co.za/cart/",target,this.options);
    browser.on('loadstart').subscribe((eve) => {
      this.spinnerDialog.show(null, null, true);     
    }, err => {
      this.spinnerDialog.hide();
    })
    
    browser.on('loadstop').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('loaderror').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('exit').subscribe(()=>{
      this.spinnerDialog.hide();

      var headers = new HttpHeaders({'Authorization': 'Bearer ' + this.userData[0].authToken});
      let httpOptions = {
        headers: headers
      };

      this.http.get("https://isabellagarcia.co.za/wp-json/cocart/v1/get-cart/"+this.userData[0].id, httpOptions)
      .subscribe(data => {
        console.log(data);
        console.log('sting data output:', JSON.stringify(data));
        if (typeof data !== 'object' || JSON.stringify(data) == "[]") {
          this.storage.ready().then( (data)=>{
            this.storage.set('cart', '');
            this.cartItems = [];
            this.recalCart();
          });
        }
      }, error => {
        console.log(error);
      });

    }, err =>{
      this.spinnerDialog.hide();
    })
  }

  recalCart() {
    this.storage.get("cart").then( (data)=>{
      this.cartItems = data;
      console.log("Items in Cart", this.cartItems);

      if (this.cartItems) {
        if (this.cartItems.length > 0) {

          this.cartItems.forEach( (item, index)=>{
            this.total = this.total + (item.product.price * item.qty);
          });

          if (this.total <= this.totalBr) { 
            this.cartBr = this.total;
            this.total = 0.00;
          } else {
            this.total = this.total-this.totalBr;
            this.cartBr = this.totalBr;
          }
        } else {
          this.showEmptyCartMessage = true;
          this.cartBr = 0.00;
          this.total = 0.00;
        }
      } else {
        this.showEmptyCartMessage = true;
        this.cartBr = 0.00;
        this.total = 0.00;
      }
    })
  }
}
