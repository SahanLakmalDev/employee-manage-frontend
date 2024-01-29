import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../service/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit{

  @ViewChild('employeeForm') employeeForm!: NgForm;
  searchTerm: string = '';
  employees:Employee[] = [];
  newEmployee:Employee = {empId:'', name:'', contact:'', address:'', status:true};
  editingEmployee:Employee | null = null;

  constructor(private employeeService : EmployeeService){

  }
  ngOnInit(): void {
    this.loadAllEmployees();
  }
  loadAllEmployees():void {
    this.employeeService.getAllEmployees()
    .subscribe((data) => {
      console.log("Data received");
      this.employees = data;
    })
  }
  saveOrUpdateEmployee():void {
    if(this.editingEmployee){
      //update the existing employee
      this.employeeService.updateEmployee(this.editingEmployee.empId, this.newEmployee)
      .subscribe(() => {
        this.resetForm();
        this.loadAllEmployees();
      },
      (error) => {
        alert('Error while updating');
      }
      );
    }else {
      //Add Employee
      this.employeeService.addEmployee(this.newEmployee)
      .subscribe(() => {
        this.resetForm();
        this.loadAllEmployees();
      },
      (error) => {
        alert('Error while adding')
      }
      );
    }
  }

  editEmployee(employee: Employee): void {
    this.editingEmployee = employee;
    // Populate form fields for editing
    this.newEmployee = { ...employee };
  }

  deactivateEmployee(empId: string): void {
    this.employeeService.deactivateEmployee(empId).subscribe(
      () => {
        this.loadAllEmployees();
      },
      (error) => {
        alert('Error while deactivating employee');
      }
    );
  }

  get filteredEmployees(): Employee[] {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.empId.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  resetForm(): void {
    this.newEmployee = { empId: '', name: '', contact: '', address: '', status: true };
    this.editingEmployee = null;
    this.employeeForm.resetForm();
  }

  isEmployeeInactive(employee: Employee): boolean {
    return !employee.status;
  }



}
