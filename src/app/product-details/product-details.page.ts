import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(public productsService: ProductsService, private route: ActivatedRoute) { }

  public item_qty:any;

  ngOnInit() {

    this.item_qty = 1;
    //let id = this.route.snapshot.paramMap.get('id');

    //this.productsService.ProductDetails(id);
		//console.log(this.productsService.productDetails);
  }

  public replaceIMG(imgString) {
    var newstr = imgString.replace("beta.", "");
    return '<img src="' + newstr + '">';
  }

  public minQty() {
    if (this.item_qty > 1) {
      this.item_qty --;
    }
  }
  public plusQty() {
    this.item_qty ++;

    console.log(this.item_qty);
  }
}
