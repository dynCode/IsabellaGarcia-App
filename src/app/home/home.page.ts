import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {LoadingController} from '@ionic/angular';
import {AuthenticationService} from '../services/authenticate.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public get menu(): MenuController {
    return this._menu;
  }
  public set menu(value: MenuController) {
    this._menu = value;
  }

  username: string;
  password: string;
  loginFail: boolean = false;
  authDetail: any;
  loginPin: string;

  constructor(private _menu: MenuController,
    private iab: InAppBrowser,
    public loadingController: LoadingController,
    public authenticationService: AuthenticationService,
    public modalController: ModalController,
    private router: Router,
    public storage: Storage,) { }

  ngOnInit() {
    
    this.menu.enable(false, 'catMenu');
    
    this.storage.ready().then( (data)=>{
      this.storage.get("authDetail").then( (data)=>{
        this.authDetail = data;
        console.log("Auth Data", this.authDetail);
        if (this.authDetail) {
          if (this.authDetail[0].username && this.authDetail[0].password) {
            //this.username = this.authDetail[0].username;
            //this.password = this.authDetail[0].password;
            var autoLog = [];
            autoLog['username'] = this.authDetail[0].username;
            autoLog['password'] = this.authDetail[0].password;
            this.login(autoLog);
          } else if (this.authDetail[0].sign_in_pin) {
            var autoLog = [];
            autoLog['loginPin'] = this.authDetail[0].sign_in_pin;
            this.loginotp(autoLog);
          }
        }
      });
    });
  }

  async login(value) {

    const loading = await this.loadingController.create({
        duration: 5000,
        message: 'Please wait...'
    });

    loading.present();

    this.authenticationService.doLogin(value.username, value.password)
      .subscribe(res => {
              this.authenticationService.setUser(res);
              // Reset the post items so that next time, they are completely
              // reloaded for the newly authenticated user...
              loading.dismiss();
              this.authenticationService.doCustomer(res);
              this.loginFail = false;
          },
          err => {
              loading.dismiss();
              this.loginFail = true;
              console.log(err);
          });
  }

  async loginotp(value) {

    const loading = await this.loadingController.create({
        duration: 5000,
        message: 'Please wait...'
    });

    loading.present();

    this.authenticationService.doOTPLogin(value.loginPin)
      .subscribe(res => {
              this.authenticationService.setUser(res);
              // Reset the post items so that next time, they are completely
              // reloaded for the newly authenticated user...
              loading.dismiss();
              this.authenticationService.doCustomer(res);
              this.loginFail = false;
          },
          err => {
              loading.dismiss();
              this.loginFail = true;
              console.log(err);
          });
  }

  public openWithInAppBrowser(){
    let target = "_system";
    const browser =this.iab.create("https://isabellagarcia.co.za/register/",target);
  }

}
