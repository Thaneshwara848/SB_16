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
import { ServdemoComponent } from './servdemo/servdemo.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { ChatramaComponent } from './chatrama/chatrama.component';
import { ChatseethaComponent } from './chatseetha/chatseetha.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { RavanaComponent } from './ravana/ravana.component';
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
    ReactivedrivenComponent,
    ServdemoComponent,
    A1Component,
    A2Component,
    A3Component,
    ChatramaComponent,
    ChatseethaComponent,
    ChatAppComponent,
    RavanaComponent
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
