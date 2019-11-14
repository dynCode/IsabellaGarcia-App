import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ProductsService } from './services/products.service';
import { AuthenticationService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public productsService: ProductsService,
    public authenticationService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      //this.productsService.loadCategories();
		  //console.log(this.productsService.categories);

      this.splashScreen.hide();
    });
  }

  public getCatDet({ id, page }: { id; page; }){
    page = 1;

    this.productsService.loadProductsCat(id, page);
		console.log(this.productsService.products);
  }
}
