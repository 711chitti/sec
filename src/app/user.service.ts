import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import{RequestOptions,Headers} from '@angular/http';
import {User} from './model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private serviceUrl = 'http://7eleventest1.co.in/Trainingbazaars/api/v1/coursecard';
  private Instite = 'http://7eleventest1.co.in/Trainingbazaars/api/v1/institute';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get<User[]>(this.serviceUrl);
  }

  getUsers(): Observable<User[]> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get<User[]>(this.Instite);
  }

}