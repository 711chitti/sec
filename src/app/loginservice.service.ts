import { Injectable } from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Login} from './model';
import{Headers,RequestOptions,Http} from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Response } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  rootUrl = 'http://localhost/hotstar/hotstar/public/api/b1/login';
  //  rootUrl = 'http://192.168.1.26/my/public/api/v1/register';   
  constructor(private http: Http) { 
    error=>{
      console.log("---------->Error in Get reqest Observable");
      console.log(error); 
    }
  }
  registerLogin(log:Login){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });

      let body :string =
  
                         "&email="+ log.email +
                          "&password="+ log.password 
                          

     console.log(this.rootUrl,body,requestOptions);
         return this.http.post(this.rootUrl,body,requestOptions) 
  }
}