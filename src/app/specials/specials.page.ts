import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.page.html',
  styleUrls: ['./specials.page.scss'],
})
export class SpecialsPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  page: number;
  tPages: any;

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, private route: ActivatedRoute) {

    this.page = 1;

  }

  ngOnInit() { 
    this.productsService.loadSpecials(this.page);
    console.log(this.productsService.specialsProducts);
    
    this.authenticationService.displayCustomer();
  }

  loadData(event) {
    setTimeout(() => {

      let id = this.route.snapshot.paramMap.get('id');
      this.productsService.loadMoreProductsCat(id, ++this.page);
      
      setTimeout(() => {

        var arrayLength = this.productsService.moreProducts.length;

        for (var i = 0; i < arrayLength; i++) {

          this.productsService.products.push(this.productsService.moreProducts[i]);
          console.log(this.productsService.moreProducts[i]);
        }

        console.log('Done');
        event.target.complete();
      }, 10000);
      if (this.productsService.moreProducts.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  public getProdDet(id){
    this.productsService.ProductDetails(id);
		console.log(this.productsService.productDetails);
  }

  public replaceIMG(imgString) {
    var newstr = imgString.replace("beta.", "");
    return '<img src="' + newstr + '">';
  }

}
