import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { ProductsService } from '../../services/products.service';
import {AuthenticationService} from '../../services/authenticate.service';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {
  update_form: FormGroup;
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  company: string;
  userData: any;

  constructor(
    public formBuilder: FormBuilder,
    public productsService: ProductsService, 
    public authenticationService: AuthenticationService, 
    public loadingController: LoadingController,
    private storage: Storage) { }

  ngOnInit() {

    this.authenticationService.getCustomer();
    setTimeout(() => {
      console.log("Account: ", this.authenticationService.customer);
      this.userData = this.authenticationService.customer;
      this.first_name = this.authenticationService.customer.shipping.first_name;
      this.last_name = this.authenticationService.customer.shipping.last_name;
      this.address_1 = this.authenticationService.customer.shipping.address_1;
      this.address_2 = this.authenticationService.customer.shipping.address_2;
      this.city = this.authenticationService.customer.shipping.city;
      this.state = this.authenticationService.customer.shipping.state;
      this.postcode = this.authenticationService.customer.shipping.postcode;
      this.company = this.authenticationService.customer.shipping.company;
    }, 1000);

    this.update_form = this.formBuilder.group({
      first_name: new FormControl(this.first_name, Validators.compose([
          Validators.required
      ])),
      last_name: new FormControl(this.last_name, Validators.required),
      address_1: new FormControl(this.address_1, Validators.required),
      address_2: new FormControl(this.address_2),
      city: new FormControl(this.city, Validators.required),
      state: new FormControl(this.state, Validators.required),
      postcode: new FormControl(this.postcode, Validators.required),
      company: new FormControl(this.company),
    });
  }

  public async updatedetails(value) {
    console.log("Values", value);

    let loading = await this.loadingController.create({
      message: 'Updating Details...'
    });
    await loading.present();

    const api = new WooCommerceRestApi({
      url: 'https://isabellagarcia.co.za',
      consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
      consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
      wpAPI: true,
      version: 'wc/v2',
      queryStringAuth: true,
    });

    api.put("customers/" + this.userData.id, {
      billing: {
        first_name: value.first_name,
        last_name: value.last_name,
        company: value.company,
        address_1: value.address_1,
        address_2: value.address_2,
        city: value.city,
        state: value.state,
        postcode: value.postcode
      },
      shipping: {
        first_name: value.first_name,
        last_name: value.last_name,
        company: value.company,
        address_1: value.address_1,
        address_2: value.address_2,
        city: value.city,
        state: value.state,
        postcode: value.postcode
      }
    })
    .then((response) => {
      console.log("Customer Update", response);
      loading.dismiss();
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });
  }
}
