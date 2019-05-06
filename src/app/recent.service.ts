import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable, from } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs';
import {Recent} from './model';

@Injectable({
  providedIn: 'root'
})
export class RecentService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  Url = "http://192.168.0.121/san/public/api/v1/recentusers";
  constructor(private http:Http) { 
  }
  //Fetch all articles

  fea(): Observable<Recent[]> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });
      return this.http.get(this.Url)
        .map(this.extractData18)
          .catch(this.handleError18);
  }
          private extractData18(res: Response) {
            let body = res.json();
              return body;
          }
          private handleError18(error: Response | any) {
          console.error(error.message || error);
          return Observable.throw(error.status);
          }
          changeMessage19(message: any) {
            this.messageSource.next(message);
          }

        }