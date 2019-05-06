import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { Contact} from './model';
import 'rxjs/add/operator/map';
import{Headers,RequestOptions,Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  rootUrl = 'http://192.168.0.121/san/public/api/v1/contact_us';
  //  rootUrl = 'http://192.168.1.26/my/public/api/v1/register';   
  constructor(private http: Http) { 
    error=>{
      console.log("---------->Error in Get reqest Observable");
      console.log(error); 
    }
  }
  registerContact(log : Contact){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });
      let body :string = "name="+ log.name +"&subject="+log.subject +"&email="+ log.email +"&mobile="+ log.mobile +"&message="+ log.message;
     console.log(this.rootUrl,body,requestOptions);
     return this.http.post(this.rootUrl,body,requestOptions) 
  }
}