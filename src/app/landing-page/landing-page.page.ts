import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authenticate.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
    //console.log(this.authenticationService.customer);
    this.authenticationService.displayCustomer();

    console.log("Show User: ", this.authenticationService.user);
  }

}
