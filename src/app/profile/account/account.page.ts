import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ProductsService } from '../../services/products.service';
import {AuthenticationService} from '../../services/authenticate.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  userData: any;

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, private storage: Storage) {}

  ngOnInit() {
    
    this.authenticationService.getCustomer();
    setTimeout(() => {
      console.log("Account: ", this.authenticationService.customer);
    }, 1000);

  }

}
