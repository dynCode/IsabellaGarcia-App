import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {AuthenticationService} from '../services/authenticate.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { delay } from 'q';
import { MenuController } from '@ionic/angular';

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

    constructor(public formBuilder: FormBuilder,
                public loadingController: LoadingController,
                public authenticationService: AuthenticationService,
                public modalController: ModalController,
                private router: Router,
                public storage: Storage,
                private menu: MenuController) {  }

    ngOnInit() {
      
      this.menu.enable(false, 'catMenu');
      
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

}