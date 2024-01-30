import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './service/employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { ActiveEmployeeComponent } from './active-employee/active-employee.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { SalaryService } from './service/salary.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ActiveEmployeeComponent,
    SalaryDetailsComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MakePaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService, SalaryService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
