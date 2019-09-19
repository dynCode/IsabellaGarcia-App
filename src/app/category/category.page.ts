import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  page: number;
  tPages: any;

  constructor(public productsService: ProductsService, private route: ActivatedRoute) {

    this.page = 1;

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    //this.productsService.countCategory(id);
    //console.log(this.productsService.catCount);

    //this.displayPagination(this.productsService.catCount);
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
      
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
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

  //public displayPagination(tProducts) {
    //this.tPages = (tProducts.count / 20);
    //console.log("Pages: ", tProducts.count);
    //console.log("Total pages: ", Math.ceil(this.tPages));
  //}

}
