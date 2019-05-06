import { Injectable } from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Donate} from './model';
import{Headers,RequestOptions,Http} from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Response } from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class RegiserviceService {
  rootUrl = 'http://192.168.0.121/san/public/api/v1/register';
  //  rootUrl = 'http://192.168.1.26/my/public/api/v1/register';   
  constructor(private http: Http) { 
    error=>{
      console.log("---------->Error in Get reqest Observable");
      console.log(error); 
    }
  }
  registerDonate(log : Donate){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });

      let body :string = "name="+ log.name +
                         "&blood_group="+log.blood_group +
                         "&email="+ log.email +
                          "&mobile="+ log.mobile +
                          "&password="+ log.password +
                          "&landline="+ log.landline +
                          "&occupation="+ log.occupation +
                          "&country="+ log.country+
                          "&state="+ log.state +
                          "&district="+ log.district +
                          "&city="+ log.city +
                          "&address="+ log.address +
                          "&is_available="+ log.is_available;

     console.log(this.rootUrl,body,requestOptions);
         return this.http.post(this.rootUrl,body,requestOptions)  
  }
}
    

