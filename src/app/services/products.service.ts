import { Injectable } from '@angular/core';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { identifierModuleUrl } from '@angular/compiler';
import { LoadingController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	
	public allProducts: allProduct[] = [];
	public products: Product[] = [];
	public categories: Categories[] = [];
	
	constructor(public loadingController: LoadingController) {}
	
	public async loadProducts() {

		let loading = await this.loadingController.create({
			message: 'Loading Products...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://beta.isabellagarcia.co.za',
			consumerKey: 'ck_9d642fe4a68e68eb5127fb9575f38167559d391c',
			consumerSecret: 'cs_6ffa41a110581d78c9bcec7df4af890b98131708',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true
		});

		api.get("products", {
			per_page: 20, // 20 products per page
			status: 'publish',
			category: 719,
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

		let loading = await this.loadingController.create({
			message: 'Loading Products...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://beta.isabellagarcia.co.za',
			consumerKey: 'ck_9d642fe4a68e68eb5127fb9575f38167559d391c',
			consumerSecret: 'cs_6ffa41a110581d78c9bcec7df4af890b98131708',
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
			loading.dismiss();
		})
		.catch((error) => {
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}

	public async loadProductsCat(id) {

		let loading = await this.loadingController.create({
			message: 'Loading Products...'
		});
		await loading.present();

		const api = new WooCommerceRestApi({
			url: 'https://beta.isabellagarcia.co.za',
			consumerKey: 'ck_9d642fe4a68e68eb5127fb9575f38167559d391c',
			consumerSecret: 'cs_6ffa41a110581d78c9bcec7df4af890b98131708',
			wpAPI: true,
			version: 'wc/v2',
			queryStringAuth: true
		});

		api.get("products", {
			per_page: 20, // 20 products per page
			status: 'publish',
			category: id,
		})
		.then((response) => {
			this.products = response.data || [];
			loading.dismiss();
		})
		.catch((error) => {
			// Invalid request, for 4xx and 5xx statuses
			console.log("Response Status:", error.response.status);
			console.log("Response Headers:", error.response.headers);
			console.log("Response Data:", error.response.data);
		})
		.finally(() => {
			// Always executed.
		});
	}
}

class allProduct { data: any; }
class Product { data: any; }
class Categories { data: any; }