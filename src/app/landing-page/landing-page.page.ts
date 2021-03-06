import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authenticate.service';
import {PageDetailsService} from '../services/page-details.service';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  userDetails: any[] = [];
  calcBR: any[] = [];
  userFirstName: any;
  userSurname: any;
  userBR: any;
  finalBR: any;
  loggedInWeb: boolean;
  options : InAppBrowserOptions = {
    location : 'yes',
    hideurlbar: "yes",
    presentationstyle : 'pagesheet',
  };

  constructor(public authenticationService: AuthenticationService, public storage: Storage, public pageDetail: PageDetailsService,private menu: MenuController,private iab: InAppBrowser) { 
    this.menu.enable(true, 'catMenu');
  }

  ngOnInit() {
    
    this.pageDetail.getCartCount();
    this.pageDetail.getBRPoints();

    this.storage.ready().then( (data)=>{

      this.storage.get("user").then( (data)=>{
        this.userDetails = data;
        this.userFirstName = this.userDetails[0].firstName;
        this.userSurname = this.userDetails[0].lastName;
        this.userBR = this.userDetails[0].brPoints;
        const browser =this.iab.create("https://isabellagarcia.co.za/?ig_k="+this.userDetails[0].loginKey,'_blank',this.options);
        browser.hide();
        this.loggedInWeb = true;
      });

    });

    

    /*this.storage.get("cart").then( (data)=> {
      this.calcBR = data;

      if ( data == null || data.length == 0 ) {

        this.finalBR = this.userBR;
        
      } else {
        for( let i = 0; i < data.length; i++ ) {
          this.finalBR = this.userBR - this.calcBR[i].amount;
        }
      }

      this.storage.set("availableBR", this.finalBR).then( ()=> {
        console.log(this.finalBR);
      });
    });*/
  }

}
