import {Injectable} from '@angular/core';
import {Http, Headers } from '@angular/http';
import {StorageService} from "./storage.service";

@Injectable()
export class AuthService {

  constructor(
      private http: Http,
      private storageService: StorageService
  ) {}

  createAuthorizationHeader(headers: Headers) {
    let token = this.storageService.get("token") ||  null;
    headers.append('Authorization', token);
  }


  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data = {}) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}