import { Component, OnInit } from '@angular/core';
import {Blood} from '../model';
import { BloodService } from '../blood.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import{Headers,RequestOptions} from '@angular/http';
@Component({
  selector: 'app-blood',
  templateUrl: './blood.component.html',
  styleUrls: ['./blood.component.scss']
})
export class BloodComponent implements OnInit {

  log:Blood;
  constructor(private bloodservice: BloodService, private toastr: ToastrService) { }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.log= {
      patient_name: '',
      patient_blood: '',
      patient_age: '',
      date_need:'',
      no_of_units:'',
      landline:'',
      hospital_name:'',
      location:'',
      patient_address:'',
      purpose:'',
      hospital_mobile:'',
      hospital_address:'',
    
      
    }
  }
  OnSubmit(form: NgForm) {
    this.bloodservice.registerBlood(form.value)
      .subscribe((data: any) => {
        if (data.error == false) {
          this.resetForm(form);
          this.toastr.error('User registration Error');
        }
        else
          this.toastr.success('Your credentials are gone', 'Success');
      });
  }
}

