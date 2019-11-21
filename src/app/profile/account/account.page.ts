import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { ProductsService } from '../../services/products.service';
import {AuthenticationService} from '../../services/authenticate.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  userData: any;
  options : InAppBrowserOptions = {
    location : 'yes',
    hideurlbar: "yes",
    presentationstyle : 'pagesheet',
  };

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, private storage: Storage,private iab: InAppBrowser,private spinnerDialog: SpinnerDialog) {}

  ngOnInit() {
    
    this.authenticationService.getCustomer();
    setTimeout(() => {
      console.log("Account: ", this.authenticationService.customer);
    }, 1000);

  }

  public openWithInAppBrowser(){
    let target = "_blank";
    const browser = this.iab.create("https://beta.isabellagarcia.co.za/my-account/edit-account/",target,this.options);
    browser.on('loadstart').subscribe((eve) => {
      this.spinnerDialog.show(null, null, true);     
    }, err => {
      this.spinnerDialog.hide();
    })
    
    browser.on('loadstop').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('loaderror').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('exit').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
  }

}
