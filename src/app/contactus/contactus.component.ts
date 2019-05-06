import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import{Headers,RequestOptions} from '@angular/http';
import { Contact } from '../model';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  log: Contact;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private contactService: ContactService, private toastr: ToastrService) { }
  ngOnInit() {
    this.resetForm();
  } 
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.log = {
      name: '',
      mobile: '',
      email: '',
      message:'',
      subject:''
      
    }
  }
  OnSubmit(form: NgForm) {
    this.contactService.registerContact(form.value)
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

