import { Injectable } from '@angular/core';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { identifierModuleUrl } from '@angular/compiler';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	
	public allProducts: allProduct[] = [];
	public allWMProducts: allWMProduct[] = [];
	public allMMProducts: allMMProduct[] = [];
	public products: Product[] = [];
	public moreProducts: moreProduct[] = [];
	public specialsProducts: specialProduct[] = [];
	public categories: Categories[] = [];
	public productDetails: productDetail[] = [];
	public useCat: number;
	public history: cusHistory[] = [];
	public searchProducts: searchProd[] = [];
	public searchMoProducts: searchMoProd[] = [];
	
	constructor(public loadingController: LoadingController, private router: Router, public storage: Storage, public alertController: AlertController) {}
	
	public async loadProducts() {

		let loading = await this.loadingController.create({
			message: 'Loading Products...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true
		});

		api.get("products", {
			per_page: 10, // 20 products per page
			status: 'publish',
			category: 719,
			order: 'asc',
			orderby: 'title',
		})
		.then((response) => {
			// Successful request
			//console.log("Response Status:", response.status);
			//console.log("Response Headers:", response.headers);
			//console.log("Response Data:", response.data);
			//console.log("Total of pages:", response.headers['x-wp-totalpages']);
			//console.log("Total of items:", response.headers['x-wp-total']);
			this.allProducts = response.data || [];
			loading.dismiss();
		})
		.catch((error) => {
			loading.dismiss();
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}

	public async loadWMProducts() {

		let loading = await this.loadingController.create({
			message: 'Loading Products...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true
		});

		api.get("products", {
			per_page: 10, // 20 products per page
			status: 'publish',
			category: 692,
			order: 'asc',
			orderby: 'title',
		})
		.then((response) => {
			// Successful request
			//console.log("Response Status:", response.status);
			//console.log("Response Headers:", response.headers);
			//console.log("Response Data:", response.data);
			//console.log("Total of pages:", response.headers['x-wp-totalpages']);
			//console.log("Total of items:", response.headers['x-wp-total']);
			this.allWMProducts = response.data || [];
			loading.dismiss();
		})
		.catch((error) => {
			loading.dismiss();
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}

	public async loadMMProducts() {

		let loading = await this.loadingController.create({
			message: 'Loading Products...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true
		});

		api.get("products", {
			per_page: 10, // 20 products per page
			status: 'publish',
			category: 696,
			order: 'asc',
			orderby: 'title',
		})
		.then((response) => {
			// Successful request
			//console.log("Response Status:", response.status);
			//console.log("Response Headers:", response.headers);
			//console.log("Response Data:", response.data);
			//console.log("Total of pages:", response.headers['x-wp-totalpages']);
			//console.log("Total of items:", response.headers['x-wp-total']);
			this.allMMProducts = response.data || [];
			loading.dismiss();
		})
		.catch((error) => {
			loading.dismiss();
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}

	public async loadCategories() {

		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true
		});

		api.get("products/categories", {
			per_page: 20, // 20 products per page
			hide_empty: true,
			parent: 0,
			orderby: 'id',
		})
		.then((response) => {
			this.categories = response.data || [];
		})
		.catch((error) => {
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}

	public async loadProductsCat(id, page, catName) {

		this.useCat = id;

		let loading = await this.loadingController.create({
			message: 'Loading Products...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true
		});

		api.get("products", {
			page: page,
			per_page: 20, // 20 products per page
			status: 'publish',
			category: id,
			order: 'asc',
			orderby: 'title',
		})
		.then((response) => {
			this.products = response.data || [];
			this.products['category'] = catName; 
			console.log("Product Cat Data", this.products);
			this.router.navigate(['/', 'tabs', 'category', id, page]);
			loading.dismiss();
		})
		.catch((error) => {
			loading.dismiss();
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}

	public async ProductDetails(id) {
		let loading = await this.loadingController.create({
			message: 'Loading Product...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true
		});

		api.get("products/" + id)
		.then((response) => {
			console.log("Product details:",response.data);
			this.productDetails = response.data || [];
			loading.dismiss();
			this.router.navigate(['/', 'tabs', 'product-details', id]);
		})
		.catch((error) => {
			loading.dismiss();
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}
	public async loadMoreProductsCat(id, page) {

		this.useCat = id;

		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true
		});

		api.get("products", {
			page: page,
			per_page: 20, // 20 products per page
			status: 'publish',
			category: id,
			order: 'asc',
			orderby: 'title',
		})
		.then((response) => {
			this.moreProducts = response.data || [];
		})
		.catch((error) => {
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}

	public async loadSpecials(page) {

		let loading = await this.loadingController.create({
			message: 'Loading Specials...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true,
		});

		api.get("products", {
			page: page,
			per_page: 20, // 20 products per page
			status: 'publish',
			order: 'asc',
			orderby: 'title',
			on_sale: true,
		})
		.then((response) => {
			this.specialsProducts = response.data || [];
			loading.dismiss();
		})
		.catch((error) => {
			loading.dismiss();
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}

	public async orderHistory(cusId) {

		console.log("Customer ID: ", cusId);

		let loading = await this.loadingController.create({
			message: 'Loading Orders...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true,
		});

		api.get("orders", {
			per_page: 20, // 20 products per page
			order: 'desc',
			orderby: 'date',
			customer: cusId,
		})
		.then((response) => {
			this.history = response.data || [];
			this.router.navigate(['/', 'orders']);
			loading.dismiss();
		})
		.catch((error) => {
			loading.dismiss();
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}

	public async searchResults(keyword, page) {
		this.storage.set("searchKey", keyword).then( ()=>{
			console.log(keyword);
		});

		let loading = await this.loadingController.create({
			message: 'Searching...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true,
		});

		api.get("products", {
			page: page,
			per_page: 20, // 20 products per page
			status: 'publish',
			//order: 'asc',
			//orderby: 'title',
			search: keyword,
			stock_status: 'instock'
		})
		.then((response) => {
			this.searchProducts = response.data || [];
			this.router.navigate(['/', 'tabs', 'search-results']);
			loading.dismiss();
		})
		.catch((error) => {
			loading.dismiss();
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}
	public async searchMoreResults(keyword, page) {
		const api = new WooCommerceRestApi({
			url: 'https://isabellagarcia.co.za',
			consumerKey: 'ck_f4cc6475041b8787c77a2b76e65959dc626cd41f',
			consumerSecret: 'cs_5a447523f8e5e4b5c953a206614534304ae9c031',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true,
		});

		api.get("products", {
			page: page,
			per_page: 20, // 20 products per page
			status: 'publish',
			order: 'asc',
			orderby: 'title',
			search: keyword,
		})
		.then((response) => {
			this.searchMoProducts = response.data || [];
		})
		.catch((error) => {
            this.presentAlert('There was a Problem!',error.response.data.message);
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}
	public async presentAlert(msgHeader, msgMsg) {
        const alert = await this.alertController.create({
            header: msgHeader,
            message: msgMsg,
            buttons: ['OK']
        });

        await alert.present();
    }
}

class allProduct { data: any; }
class allWMProduct { data: any; }
class allMMProduct { data: any; }
class Product { data: any; }
class moreProduct { data: any; }
class Categories { data: any; }
class productDetail { data: any; }
class specialProduct { data: any; }
class cusHistory { data: any; }
class searchProd { data: any; }
class searchMoProd { data: any; }