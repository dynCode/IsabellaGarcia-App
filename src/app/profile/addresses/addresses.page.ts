import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ProductsService } from '../../services/products.service';
import {AuthenticationService} from '../../services/authenticate.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, private storage: Storage) { }

  ngOnInit() {

    this.authenticationService.getCustomer();
    
  }

}
