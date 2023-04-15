import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { DeptComponent } from './dept/dept.component';
import { ItComponent } from './it/it.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
 {
  path:'home',component:HomeComponent
 },
 {
  path:'galary',component:GalaryComponent
 },
 {
  path:'login',component:LoginComponent
 },
 {
  path:'signup',component:SignupComponent
 },{
  path:'dept',component:DeptComponent
 },{
  path:'dept/it',component:ItComponent
 },{
  path:'dept/test',component:TestingComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
