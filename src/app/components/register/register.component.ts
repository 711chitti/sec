import { Component, OnInit } from '@angular/core';
import {Donate} from '../../model';
import { RegiserviceService } from '../../regiservice.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import{Headers,RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
log:Donate[];
selectedLevel4:Array<Object>=this.log;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private regiserviceService: RegiserviceService, private toastr: ToastrService,private router : Router) { }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.log = [{
      name: '',
      mobile: '',
      email: '',
        blood_group:'',
        landline:'',
        occupation:'',
        country:'',
        state:'',
        district:'',
        city:'',
        address:'',
        is_available:'',
      password: '',
      
    }]
  }
  OnSubmit(form: NgForm) {
    this.regiserviceService.registerDonate(form.value)
      .subscribe((data: any) => {
        if (data.error == false) {
          this.resetForm(form);
          this.toastr.error('User registration Error');
        }
        else
          this.toastr.success('Your credentials are gone', 'Success');
      });
  }
  login(){
    this.router.navigate(['login']);
  }
}

