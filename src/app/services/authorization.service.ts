import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base';



@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private httpClient: HttpClient) { }

  getTest() {
    return this.httpClient.get(`${BASE_URL}/test`);
  }

  getUser() {
    return this.httpClient.get(`${BASE_URL}/test`);
  }

  postLogin() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(`${BASE_URL}/login`, {
      "username": "mister@gmail.com",
      "password": "123456"
    },
      { headers: headers });
  }
}
