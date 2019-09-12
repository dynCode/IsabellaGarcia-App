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

  ngOnInit() {
    //let id = this.route.snapshot.paramMap.get('id');

    //this.productsService.ProductDetails(id);
		//console.log(this.productsService.productDetails);
  }

  public replaceIMG(imgString) {
    var newstr = imgString.replace("beta.", "");
    return '<img src="' + newstr + '">';
  }

}
