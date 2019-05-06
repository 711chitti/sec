import { Injectable } from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Blood} from './model';
import{Headers,RequestOptions,Http} from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Response } from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class BloodService {
  rootUrl = 'http://192.168.0.121/san/public/api/v1/blood_request_i';
  //  rootUrl = 'http://192.168.1.26/my/public/api/v1/register';   
  constructor(private http: Http) { 
    error=>{
      console.log("---------->Error in Get reqest Observable");
      console.log(error); 
    }
  }
  registerBlood(log : Blood){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });

      let body :string = "patient_name="+ log.patient_name +
                         "&patient_blood="+log.patient_blood +
                         "&patient_age="+ log.patient_age +
                          "&date_need="+ log.date_need +
                          "&no_of_units="+ log.no_of_units +
                          "&landline="+ log.landline +
                          "&hospital_name="+ log.hospital_name +
                          "&location="+ log.location+
                          "&patient_address="+ log.patient_address +
                          "&purpose="+ log.purpose +
                          "&hospital_mobile="+ log.hospital_mobile +
                          "&hospital_address="+ log.hospital_address ;

     console.log(this.rootUrl,body,requestOptions);
         return this.http.post(this.rootUrl,body,requestOptions)  
  }
}
    

