import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import {AuthenticationService} from '../../services/authenticate.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  userDetails: any[] = [];
  userOrders: any[] = [];
  userFirstName: any;
  userSurname: any;
  userBR: any;
  userID: number;
  hasOrders: boolean = false;

  constructor(public authenticationService: AuthenticationService, public productsService: ProductsService, public storage: Storage) { }

  ngOnInit() {
    this.storage.ready().then( (data)=>{

      this.storage.get("user").then( (data)=>{
        this.userDetails = data;
        this.userFirstName = this.userDetails[0].firstName;
        this.userSurname = this.userDetails[0].lastName;
        this.userBR = this.userDetails[0].brPoints;
        this.userID = this.userDetails[0].id;
      });
    });

    this.userOrders = this.productsService.history;

    if (this.userOrders.length > 0 || this.userOrders.length !== null) {
      this.hasOrders = true;
    } else {
      this.hasOrders = false;
    }

    console.log(this.userOrders);
  }

}
