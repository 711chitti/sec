import { Component, OnInit,ViewChild } from '@angular/core';
import {Recent} from '../../model';
import {RecentService} from '../../recent.service';
import{Headers,RequestOptions,Http} from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit {
  allExp: Recent[]=[];
  public portId:any;
  selectedCart:any;
  statusCode: number;
  selectedLevel : Array<Object> = this.allExp;

  constructor(private recentService: RecentService ,private router: Router) { }
  ngOnInit(): void {
    this.getAllRecnet();
  }   
  //Fetch all articles
  getAllRecnet() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });
       this.recentService.fea()
     .subscribe(
             data => this.selectedLevel = data,
               errorCode =>  this.statusCode = errorCode);   
  }
}



