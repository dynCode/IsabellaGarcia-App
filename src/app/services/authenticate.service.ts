import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

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


    constructor(private http: HttpClient, public loadingController: LoadingController, private router: Router, public storage: Storage, public alertController: AlertController) {
    }

    doLogin(username, password) {
        this.storage.get("authDetail").then((data) => {
            
            data = [];
            data.push({
                "username": username,
                "password": password
            });

            this.storage.set("authDetail", data).then( ()=>{
                console.log("User Set");
                console.log(data);
            })
        });
        
        return this.http.post('https://isabellagarcia.co.za/wp-json/jwt-auth/v1/token', {
            username: username,
            password: password
        });
    }

    validateAuthToken(token) {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Basic ' + token);
        return this.http.post('https://isabellagarcia.co.za/wp-json/jwt-auth/v1/token/validate?token=' + token,
            {}, {headers: headers});
    }

    getUser() {
        this.userData = this.user;
        return this.user;
    }

    setUser(user) {
        this.user = user;
    }

    async doCustomer(user) {
        let loading = await this.loadingController.create({
			message: 'Loading Member details...'
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

            this.router.navigate(['/', 'landing-page']);
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
        
        return this.customer;
    }

    async getCustomer() {
        this.storage.get('user').then( (data) => {
            this.userData = data;
        });

        let loading = await this.loadingController.create({
			message: 'Loading Account details...'
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

        const cusData = {
            email: this.userData[0].email,
        }

		api.get("customers/", cusData)
		.then((response) => {
            this.customer = response.data[0] || [];
			//this.getCustomer(response.data[0] || []);
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

        let url = 'https://isabellagarcia.co.za/wp-json/wp/v2/users/'+memberdetails;
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

                this.storage.get("user").then((data) => {
                    data = [];

                    data.push({
                        "id": this.MemPoints.id,
                        "firstName": this.MemPoints.meta.first_name[0],
                        "lastName": this.MemPoints.meta.last_name[0],
                        "email": this.MemPoints.meta.billing_email[0],
                        "brPoints": this.MemPoints.meta.availible_beauty_rands,
                        "history": this.MemPoints.meta.beauty_bank_history,
                        "loginKey": this.MemPoints.meta.auto_log_key[0],
                        "authToken": this.user.token
                    });

                    this.storage.set("user", data).then( ()=>{
                        console.log("User Updated");
                        console.log(data);                
                    })

                    //this.autoLoginIn(this.MemPoints.meta.auto_log_key[0]);
                });
            },
            (err) => {
                this.MemPoints = err;
            }
        );
    }

    public async presentAlert(msgHeader, msgMsg) {
        const alert = await this.alertController.create({
            header: msgHeader,
            message: msgMsg,
            buttons: ['OK']
        });

        await alert.present();
    }

    /*
    autoLoginIn(alKey) {
        let url = 'https://isabellagarcia.co.za/?ig_k='+alKey;
        let headers = new HttpHeaders({'Access-Control-Allow-Origin': '*','responseType': 'text'});
        let httpOptions = {
            headers: headers
        };
        this.http.get(url,httpOptions).subscribe((response) => {
            console.log("Auto Login", response);
        });
    }
    */
}

class customerDetail { data: any; }
class MemPoint { data: any }