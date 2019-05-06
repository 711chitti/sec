import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map';
import{User} from '../model';
import { Observable } from 'rxjs';
import{UserService} from '../user.service';
import 'rxjs/add/operator/map';
import {DataSource} from '@angular/cdk/collections';
import {Recent} from '../model';
import {RecentService} from '../recent.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  allExp: Recent[]=[];
  public portId:any;
  selectedCart:any;
  statusCode: number;
  selectedLevel : Array<Object> = this.allExp;

  constructor(private recentService: RecentService ,private router: Router ,private http:Http) { }
 



  found:boolean;
  emp: User[];
   found1:boolean;
  
blood:[];
country:[];
state:[];
district:[];
city:[];

    address: string = '';
    description: string = '';

    selectedLevel5 : Array<Object> = this.blood;
    selectedLevel1 : Array<Object> = this.country;
    selectedLevel2 : Array<Object> = this.state;
    selectedLevel3 : Array<Object> = this.district;
    selectedLevel4 : Array<Object> = this.city;

  ngOnInit(): void {
    this.getAllRecnet();
  }   
  //Fetch all articles
 



callGetProfileServerUsingObservable(){
  this.getProfileServerUsingObservable().subscribe(data => {
    console.log(data);
            console.log(" 2",data);
            this.emp =JSON.parse(JSON.stringify(data || null ));
            console.log("--------->Success in Get reqest Observable");
            console.log("--------->Method Success callback Observable");
            console.log(this.emp);
    },
    error=>{
      console.log("---------->Error in Get reqest Observable");
      console.log(error); 
    });
}


onCityKeyUp(event:any){
  this.selectedLevel = event.target.value;
  
  this.found1 = false;
}
onCityKeyUp1(event:any){
  this.selectedLevel1 = event.target.value;
  
  this.found1 = false;
}
onCityKeyUp2(event:any){
  this.selectedLevel2 = event.target.value;
  
  this.found1 = false;
}
onCityKeyUp3(event:any){
  this.selectedLevel3 = event.target.value;
  this.found1 = false;
}
onCityKeyUp4(event:any){
  this.selectedLevel4 = event.target.value;
  this.found1 = false;
}

// onCourseKeyUp(event:any){
  
//   this.course=event.target.value;
//   this.found = false;
// }

    getProfileServerUsingObservable() {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      const requestOptions = new RequestOptions({ headers: headers });
      return new Observable((observer) => {
        this.http.get(`http://192.168.0.105/san/public/api/v1/location/${this.selectedLevel}/${this.selectedLevel1}
        /${this.selectedLevel2}/${this.selectedLevel3}/${this.selectedLevel4}`)
        // this.http.get(`http://7eleventest1.co.in/Trainingbazaars/api/v1/coursecardl/${this.location}`)
        .map((response) => response.json())
        .subscribe(
          
        (data) => {
          this.found=true;
          this.found1=true;
          observer.next(data);
          observer.complete();
          console.log(data);
        
        },
        (error) => {
           observer.error(error);
          observer.complete();
        });
      }
      );
    }
  
    getAllRecnet() {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      const requestOptions = new RequestOptions({ headers: headers });
         this.recentService.fea()
       .subscribe(
               data => this.selectedLevel5 = data,
                 errorCode =>  this.statusCode = errorCode);   
    }
    blood1(){
      this.router.navigate(['blood']);
    }
    join(){
        this.router.navigate(['register']);
    }
    act(){
      this.router.navigate(['activites']);
  }
  }
