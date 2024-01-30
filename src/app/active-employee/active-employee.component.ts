import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-active-employee',
  templateUrl: './active-employee.component.html',
  styleUrl: './active-employee.component.scss'
})
export class ActiveEmployeeComponent implements OnInit{

  activeEmployees: Employee[] = [];

  constructor(private employeeService : EmployeeService){}

  ngOnInit(): void {
    this.loadAllActiveEmployees();
  }

  loadAllActiveEmployees():void {
    this.employeeService.getActiveEmployees()
    .subscribe((data) => {
      console.log("Active Employees Received");
      this.activeEmployees = data;
    },
    (error) => {
      alert("Error occured while fetching the employees");
    }
    )
  }


}
