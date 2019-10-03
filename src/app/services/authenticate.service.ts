import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public user: any;
    public customer: any;
    public customerDetails: customerDetail[] = [];
    private member: any;
    public userData: any;
    public MemPoints: any;


    constructor(private http: HttpClient, public loadingController: LoadingController, private router: Router, private storage: Storage) {
    }

    doLogin(username, password) {
        this.storage.set('username', username);
        this.storage.set('password', password);
        
        return this.http.post('https://beta.isabellagarcia.co.za/wp-json/jwt-auth/v1/token', {
            username: username,
            password: password
        });        
    }

    validateAuthToken(token) {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Basic ' + token);
        return this.http.post('https://beta.isabellagarcia.co.za/wp-json/jwt-auth/v1/token/validate?token=' + token,
            {}, {headers: headers});
    }

    getUser() {
        this.userData = this.user;
        return this.user;
    }

    setUser(user) {
        this.user = user;
        console.log("User Data", this.user);
        this.storage.set('user', this.user);
    }

    async doCustomer(user) {
        let loading = await this.loadingController.create({
			message: 'Loading Member details...'
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

        const cusData = {
            email: user.user_email
        }

		api.get("customers/", cusData)
		.then((response) => {
			this.setCustomer(response.data[0] || []);
            loading.dismiss();
            //this.router.navigate(['/', 'tabs', 'shop']);
            
            let memKey = response.data[0].id;
            //for (var i=0; i < response.data[0].meta_data.length; i++) {
            //    if (response.data[0].meta_data[i].key === "membership_number") {
            //        memKey = response.data[0].meta_data[i].value;
            //    }
            //}
            let bps = this.getMyPoints(memKey);

            console.log("Member Points:", bps);
            this.router.navigate(['/', 'tabs', 'shop']);
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
        
        return this.customer;
    }

    async getCustomer() {
        this.storage.get('user').then((val) => {
            //console.log("userData: ", val);
            this.userData = val;
        });

        let loading = await this.loadingController.create({
			message: 'Loading Account details...'
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

        const cusData = {
            email: this.userData.user_email
        }

		api.get("customers/", cusData)
		.then((response) => {
            this.customer = response.data[0] || [];
			//this.getCustomer(response.data[0] || []);
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
        
        //return this.customer;
    }

    setCustomer(custData) {
        this.customer = custData;
        this.customerDetails = this.customer;
    }

    displayCustomer() {
        console.log("Customer Data: ", this.customerDetails);
    }

    getBP(memberdetails): Observable<MemPoint[]> {
        let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.user.token});

        let url = 'https://beta.isabellagarcia.co.za/wp-json/wp/v2/users/'+memberdetails;
        //let customHeaders: HttpHeaders = new HttpHeaders().set('Api-key', '784e1e4dd5cf10364b2ae5fb261b3944');
        //headers.append('Api-key', '784e1e4dd5cf10364b2ae5fb261b3944');
        let httpOptions = {
            headers: headers
        };
        return this.http.get(url,httpOptions).pipe(
          map((res) => {
            this.MemPoints = res;
            return this.MemPoints;
        }));
    }

    getMyPoints(memberdetails): void {
        this.getBP(memberdetails).subscribe(
            (res: MemPoint[]) => {
                this.MemPoints = res;
            },
            (err) => {
                this.MemPoints = err;
            }
        );
    }
}

class customerDetail { data: any; }
class MemPoint { data: any }