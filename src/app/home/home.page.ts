import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

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

  constructor(private _menu: MenuController) {
    this.menu.enable(false, 'catMenu');
  }

}
