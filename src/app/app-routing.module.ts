import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ActiveEmployeeComponent } from './active-employee/active-employee.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'employee', component: EmployeeComponent },
    { path: 'active-employee', component: ActiveEmployeeComponent },
    { path: 'salary-details', component: SalaryDetailsComponent },
  ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
