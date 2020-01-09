import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import {AuthenticationService} from '../../services/authenticate.service';
import { Storage } from '@ionic/storage';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  update_form: FormGroup;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  userData: any;
  authDetail: any;

  constructor(public formBuilder: FormBuilder,public productsService: ProductsService, public authenticationService: AuthenticationService,public storage: Storage,public loadingController: LoadingController, public alertController: AlertController) {}

  ngOnInit() {
    
    this.authenticationService.getCustomer();
    setTimeout(() => {
      console.log("Account: ", this.authenticationService.customer);
      this.userData = this.authenticationService.customer;
      this.first_name = this.authenticationService.customer.first_name;
      this.last_name = this.authenticationService.customer.last_name;
      this.email = this.authenticationService.customer.email;
    }, 1000);

    this.storage.ready().then( (data)=>{
      this.storage.get("authDetail").then( (data)=>{
        this.authDetail = data;
        console.log("Auth Data", this.authDetail);
        if (this.authDetail) {
          if (this.authDetail[0].password) {
            this.password = this.authDetail[0].password;
          }
        }
      });
    });

    this.update_form = this.formBuilder.group({
      first_name: new FormControl(this.first_name, Validators.compose([
          Validators.required
      ])),
      last_name: new FormControl(this.last_name, Validators.required),
      email: new FormControl(this.email, Validators.required),
      password: new FormControl(this.password, Validators.required)
    });

  }

  public async updatedetails(value) {
    //let uFname = value.first_name?value.first_name:this.userData.first_name;
    //let uLname = value.last_name?value.last_name:this.userData.last_name;
    //let uEmail = value.email?value.email:this.userData.email;

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
      first_name: value.first_name,
      last_name: value.last_name,
      email: value.email,
      password: value.password
    })
    .then((response) => {
      console.log("Customer Update", response);

      this.storage.ready().then( (data)=>{

        this.storage.get("user").then( (data)=>{
          let userDetails = data;
          userDetails[0].firstName = value.first_name;
          userDetails[0].lastName = value.last_name;
          userDetails[0].email = value.email;
          this.storage.set("user", userDetails);
        });
  
        this.storage.get("authDetail").then( (data)=>{
          let authDeatils = data;
          authDeatils[0].password = value.password;
          this.storage.set("authDetail", authDeatils);
        });
      });

      loading.dismiss();
    })
    .catch((error) => {
      loading.dismiss();

      this.presentAlert('There was a Problem!',error.response.data.message);

      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });
  }

  public async presentAlert(msgHeader, msgMsg) {
    const alert = await this.alertController.create({
      header: msgHeader,
      message: msgMsg,
      buttons: ['OK']
    });

    await alert.present();
  }

}

