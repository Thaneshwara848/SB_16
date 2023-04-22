import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { DeptComponent } from './dept/dept.component';
import { ItComponent } from './it/it.component';
import { TestingComponent } from './testing/testing.component';
import { DeployementComponent } from './deployement/deployement.component';
import { LoanComponent } from './loan/loan.component';
import { EduComponent } from './loan/edu/edu.component';
import { HomeloanComponent } from './loan/homeloan/homeloan.component';
import { PersanlComponent } from './loan/persanl/persanl.component';
import { GoldComponent } from './loan/gold/gold.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { AttrubutedirComponent } from './attrubutedir/attrubutedir.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqurPipe } from './squr.pipe';
import { CubePipe } from './cube.pipe';
import { FromsdemoComponent } from './fromsdemo/fromsdemo.component';
import { TempletdrivenComponent } from './templetdriven/templetdriven.component';
import { ReactivedrivenComponent } from './reactivedriven/reactivedriven.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalaryComponent,
    LoginComponent,
    ContactusComponent,
    SignupComponent,
    DeptComponent,
    ItComponent,
    TestingComponent,
    DeployementComponent,
    LoanComponent,
    EduComponent,
    HomeloanComponent,
    PersanlComponent,
    GoldComponent,
    DatabindingComponent,
    DirectivedemoComponent,
    AttrubutedirComponent,
    PipedemoComponent,
    SqurPipe,
    CubePipe,
    FromsdemoComponent,
    TempletdrivenComponent,
    ReactivedrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
