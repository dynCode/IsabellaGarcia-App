import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userDetails: any[] = [];
  userOrders: any[] = [];
  userFirstName: any;
  userSurname: any;
  userBR: any;
  cartList: any[] = [];
  showCartCount: boolean = false;
  userID: number;
  hasOrders: boolean = false;

  constructor(
    public productsService: ProductsService, 
    public authenticationService: AuthenticationService, 
    public storage: Storage, 
    public alertController: AlertController, 
    private router: Router) {

      this.storage.ready().then( (data)=>{

        this.storage.get("user").then( (data)=>{
          this.userDetails = data;
          this.userFirstName = this.userDetails[0].firstName;
          this.userSurname = this.userDetails[0].lastName;
          this.userBR = this.userDetails[0].brPoints;
          this.userID = this.userDetails[0].id;
        })

        this.storage.get("cart").then( (data)=>{
          this.cartList = data.length;

          if (this.cartList.length > 0 || this.cartList.length !== null) {
            this.showCartCount = true;
          } 

        });

      });
  }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Log out',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Log Out',
          handler: () => {
            console.log('Confirm Okay');
            this.storage.remove("user").then(()=>{
              this.router.navigate(['/', 'home']);
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async getOrders() {
    this.productsService.orderHistory(this.userID);
  }

}
