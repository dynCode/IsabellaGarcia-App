import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

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

  constructor(private _menu: MenuController,private iab: InAppBrowser) {
    this.menu.enable(false, 'catMenu');
  }

  public openWithInAppBrowser(){
    let target = "_system";
    const browser =this.iab.create("https://beta.isabellagarcia.co.za/register/",target);
  }

}
