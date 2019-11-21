import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { ProductsService } from '../services/products.service';
import {AuthenticationService} from '../services/authenticate.service';
import {PageDetailsService} from '../services/page-details.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  page: number;
  tPages: any;
  cartList: any[] = [];
  userDetails: any[] = [];
  productResults: any[] = [];
  showCartCount: boolean = false;
  noResults: boolean = false;
  userBR: any;
  keyword: string = '';
  searchQuery: any;

  constructor(public productsService: ProductsService, public authenticationService: AuthenticationService, private route: ActivatedRoute, public storage: Storage, public pageDetail: PageDetailsService) {
  }

  ngOnInit() { 
    this.pageDetail.showCount();
    this.pageDetail.showBRPoints();

    this.page = 1;

    this.storage.ready().then( (data)=>{
      this.storage.get("searchKey").then( (data)=>{
        this.keyword = data;
      });
    });

    //this.authenticationService.displayCustomer();
    this.productResults = [];

    this.productResults = this.productsService.searchProducts;

    if (this.productsService.searchProducts.length > 0 || this.productsService.searchProducts.length !== null) {
      this.noResults = false;
    } else {
      this.noResults = true;
    }

  }

  loadData(event) {
    setTimeout(() => {

      let id = this.route.snapshot.paramMap.get('id');
      this.productsService.searchMoreResults(this.keyword, ++this.page);
      
      setTimeout(() => {

        var arrayLength = this.productsService.searchMoProducts.length;

        for (var i = 0; i < arrayLength; i++) {

          this.productsService.searchProducts.push(this.productsService.searchMoProducts[i]);
          console.log(this.productsService.searchMoProducts[i]);
        }

        console.log('Done');
        event.target.complete();
      }, 10000);
      if (this.productsService.searchMoProducts.length == 1000) {
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

  public getLatestKey() {
    this.storage.get("searchKey").then( (data)=>{
      this.keyword = data;
    });

    return '<span>Showing results for ' + this.keyword + '</span>';
  }

  public searchByKeyword() {
    console.log("SEARCH", this.searchQuery);
    this.productsService.searchResults(this.searchQuery, 1);
  }
}
