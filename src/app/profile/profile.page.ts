import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService) {}

  ngOnInit() {
    
  }

}
