import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShopPage } from './shop.page';

const routes: Routes = [
  {
    path: '',
    component: ShopPage
  }
];
/*
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: 'https://beta.isabellagarcia.co.za',
  consumerKey: 'ck_9d642fe4a68e68eb5127fb9575f38167559d391c',
  consumerSecret: 'cs_6ffa41a110581d78c9bcec7df4af890b98131708',
  version: 'wc/v2',
  queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
});

WooCommerce.get("products")
  .then((response) => {
    //console.log(response.data);
  })
  .catch((error) => {
    //console.log(error.response.data);
  });
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
