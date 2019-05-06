import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurcausesComponent } from './ourcauses/ourcauses.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { DonateComponent } from './components/donate/donate.component';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule,MatTableModule,
   MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule} from  '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegiserviceService } from './regiservice.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { ContactService } from './contact.service';
import { RecentService } from './recent.service';
import { BloodComponent } from './blood/blood.component';
import { LoginserviceService } from './loginservice.service';
import { BloodService } from './blood.service';
import { ReferafriendComponent } from './components/referafriend/referafriend.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    OurcausesComponent,
    BlogComponent,
    ContactusComponent,
    HeaderTopComponent,
    LoginComponent,
    RegisterComponent,
    ActivitesComponent,
    DonateComponent,
    BloodComponent,
    ReferafriendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,FormsModule,ReactiveFormsModule,MatNativeDateModule,MatDatepickerModule,MatIconModule,
    MatToolbarModule,MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,HttpClientModule,
    HttpModule,ToastrModule.forRoot(),MatTableModule,
  ],
  providers: [RegiserviceService,ContactService,RecentService,LoginserviceService,BloodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
