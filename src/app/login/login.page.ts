import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {AuthenticationService} from '../services/authenticate.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { delay } from 'q';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    login_form: FormGroup;
    error_message: string;
    passwordType: string = 'password';
    passwordShown: boolean = false;
    username: string;
    password: string;
    loginFail: boolean = false;
    authDetail: any;

    constructor(public formBuilder: FormBuilder,
                public loadingController: LoadingController,
                public authenticationService: AuthenticationService,
                public modalController: ModalController,
                private router: Router,
                public storage: Storage,
                private menu: MenuController,
                private iab: InAppBrowser) {  }

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
            }
          }
        });
      });

      this.login_form = this.formBuilder.group({
        username: new FormControl(this.username, Validators.compose([
            Validators.required
        ])),
        password: new FormControl(this.password, Validators.required)
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
                this.error_message = 'Invalid credentials.';
                loading.dismiss();
                this.loginFail = true;
                console.log(err);
            });
  }

  public togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  public openWithInAppBrowser(){
    let target = "_system";
    const browser =this.iab.create("https://beta.isabellagarcia.co.za/register/",target);
  }

}