import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';
import {PageDetailsService} from '../services/page-details.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.page.html',
  styleUrls: ['./bank.page.scss'],
})
export class BankPage implements OnInit {

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
    private router: Router,
    public pageDetail: PageDetailsService) {
  }

  ngOnInit() {

    this.pageDetail.showCount();
    this.pageDetail.showBRPoints();

    this.storage.ready().then( (data)=>{

      this.storage.get("user").then( (data)=>{
        this.userDetails = data;
        this.userFirstName = this.userDetails[0].firstName;
        this.userSurname = this.userDetails[0].lastName;
        //this.userBR = this.userDetails[0].brPoints;
        this.userID = this.userDetails[0].id;
      });

    });
  }

}
