import { Component, OnInit } from '@angular/core';
import {Login} from '../../model';
import { LoginserviceService } from '../../loginservice.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import{Headers,RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  log:Login;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private LoginserviceService: LoginserviceService, private toastr: ToastrService ,private router : Router) { }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.log = {
  
      email: '',
      password: '',
      
    }
  }
  OnSubmit(form: NgForm) {
    this.LoginserviceService.registerLogin(form.value)
      .subscribe((data: any) => {
        if (data.error == false) {
          this.resetForm(form);
          this.toastr.error('User registration Error');
        }
        else
          this.toastr.success('Your credentials are gone', 'Success');
      });
  }
  reg(){
         this.router.navigate(['register']);
  }
}
