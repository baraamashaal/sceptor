/*
TODO:
  - Implement advance canActivate, canLoad
  - tokens
    - generating
    - refresh
    - destroy
*/

import { Injectable } from '@angular/core';
import {
  Http, Response, RequestOptionsArgs, Request, BaseRequestOptions, RequestOptions, Headers,
  RequestMethod
} from '@angular/http';
import { CanActivate, CanLoad } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Credential } from './auth.model';

@Injectable()
export class AuthService implements CanActivate {

  set credentials(credentials: Credential) {

  }
  constructor(private http: Http) { }





  canActivate(): boolean {
    return true;
  }
  canLoad(): boolean {
    return true;
  }
  signIn(): Observable<Response> {

  }
  signOut(): Observable<Response> {

  }

  // NOTE: make custom request method
  // request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
  //   return this._request(this._mergeRequestOptionsArgs({
  //           url:    url,
  //           method: RequestMethod.Options
  //       }, options));
  // }
  // END

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(this._mergeRequestOptionsArgs({
      url: 'url',
      method: RequestMethod.Get
    }, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(this._mergeRequestOptionsArgs({
      url: 'url',
      method: RequestMethod.Post,
      body: body
    }, options));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(this._mergeRequestOptionsArgs({
      url: 'url',
      method: RequestMethod.Put,
      body: body
    }, options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(this._mergeRequestOptionsArgs({
      url: 'url',
      method: RequestMethod.Delete
    }, options));
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(this._mergeRequestOptionsArgs({
      url: 'url',
      method: RequestMethod.Patch,
      body: body
    }, options));
  }

  head(path: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._request({
      method: RequestMethod.Head,
      url: path
    });
  }

  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._request(this._mergeRequestOptionsArgs({
      url: url,
      method: RequestMethod.Options
    }, options));
  }


  private _request(options: RequestOptionsArgs): Observable<Response> {

    let baseRequestOptions: BaseRequestOptions;
    let baseHeaders: { [key: string]: string; };

    baseRequestOptions = new RequestOptions({
      headers: new Headers(baseHeaders)
    });

    baseRequestOptions = baseRequestOptions.merge(options);

    // NOTE: use "rxjs/add/operator/share" to handel the request see https://goo.gl/34rjzW
    return this.http.request(new Request(baseRequestOptions));
  }
  private _mergeRequestOptionsArgs(options: RequestOptionsArgs, addOptions?: RequestOptionsArgs): RequestOptionsArgs {
    return options ? (<any>Object).assign(options, addOptions) : void 0;
  }

}
