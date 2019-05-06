import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DonateComponent } from './components/donate/donate.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { BloodComponent } from './blood/blood.component';
import { ReferafriendComponent } from './components/referafriend/referafriend.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contactus',
    component:ContactusComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'donate',
    component: DonateComponent
  },
  {
    path: 'activites',
    component: ActivitesComponent
  },
  {
    path: 'blood',
    component: BloodComponent
  },
  {
    path: 'referafriend',
    component: ReferafriendComponent
  },
  {path: '**', redirectTo: '/home', pathMatch: 'full'} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
