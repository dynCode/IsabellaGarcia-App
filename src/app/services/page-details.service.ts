import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageDetailsService {

  public cartCount: number = 0;
  public newCount: number = 0;
  public subCount: number = 0;
  public cartLists: cartList[] = [];
  public calcBR: userDet[] = [];
  public currentBR: number = 0;
  public finalBR: number = 0;

  constructor(public loadingController: LoadingController, private router: Router, public storage: Storage) { }

  // GET CART COUNT //
  public async getCartCount() {
    this.storage.ready().then( (data)=>{

      this.storage.get("cart").then( (data)=>{
        this.cartCount = data.length;
        this.newCount = this.cartCount;
        this.subCount = this.cartCount;
        console.log("cart count",this.cartCount);
      });

    });
  }

  public async setCartCount(amount) {
    this.cartCount = this.cartCount + amount;
    //this.subCount = this.cartCount;
    console.log("newcart count", this.cartCount);
    return this.cartCount;
  }

  public subCartCount() {
    let oldCount = this.cartCount;
    
    this.cartCount = oldCount - 1;
    
    console.log(this.cartCount);
    return this.cartCount;
  }

  public async showCount() {
    return this.cartCount;
  }

  // GET CURRENT BR //

  public async getBRPoints() {
    this.storage.ready().then( (data)=>{

      this.storage.get("user").then( (data)=>{
        this.currentBR = data[0].brPoints;
        console.log("DB BR: ", this.currentBR);
      });

      this.storage.get("cart").then( (data)=> {

        if ( data == null || data.length == 0 ) {
          this.finalBR = this.currentBR
        } else {
          let tempSUM = 0;
          for( let i = 0; i < data.length; i++ ) {
            tempSUM = tempSUM + data[i].amount;
            console.log("Sub BR: ", tempSUM);
          }

          this.finalBR = this.currentBR - tempSUM;
        }

        this.storage.set("availableBR", this.finalBR).then( ()=> {
          console.log(this.finalBR);
        });
      });

    });
    
    return this.finalBR;
  }

  public async setBRPoints(amount) {
    let tempBR = this.finalBR;
    this.finalBR = tempBR - amount;
    console.log(this.finalBR);
  }

  public addBRPoints(brAmount) {
    console.log("add BR: ", brAmount);
    let oldBR = this.finalBR;
    
    this.finalBR = oldBR + parseInt(brAmount);
    
    console.log(this.finalBR);
    return this.finalBR;
  }

  public async showBRPoints() {
    return this.finalBR;
  }
}

class userDet { data: any; }
class constNewCount { data: any; }
class constSubCount { data: any; }
class cartList { data: any; }