import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Configure } from '../configure/configure';

@Injectable({
  providedIn: 'root'
})
export class WordPressService {

  constructor(private http: HttpClient) { }
  /*
  doLogin(username, password){
    return this.http.post(Config.WORDPRESS_URL + 'wp-json/jwt-auth/v1/token',{
      username: username,
      password: password
    })
  }
  */
}
