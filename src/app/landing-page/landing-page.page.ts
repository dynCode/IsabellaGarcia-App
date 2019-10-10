import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authenticate.service';
import { Storage } from '@ionic/storage';

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

  constructor(public authenticationService: AuthenticationService, public storage: Storage) { 

    this.storage.ready().then( (data)=>{

      this.storage.get("user").then( (data)=>{
        this.userDetails = data;
        this.userFirstName = this.userDetails[0].firstName;
        this.userSurname = this.userDetails[0].lastName;
        this.userBR = this.userDetails[0].brPoints;
      })

      this.storage.get("cart").then( (data)=> {
        this.calcBR = data;

        for( let i = 0; i < data.length; i++ ) {
          this.finalBR = this.userBR - this.calcBR[i].amount;
        }

        this.storage.set("availableBR", this.finalBR).then( ()=> {
          console.log(this.finalBR);
        });
      });

    });

  }

  ngOnInit() {}

}
