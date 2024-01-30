import { Component, OnInit, ViewChild } from '@angular/core';
import { Salary, SalaryService } from '../service/salary.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrl: './salary-details.component.scss'
})
export class SalaryDetailsComponent implements OnInit{

  @ViewChild ('salaryDetailForm') salaryDetailForm!:NgForm;

  salaryDetails:Salary[]= [];
  empId:string = '';
  year:string = '';

  constructor(private salaryService : SalaryService){}

  ngOnInit(): void {
    
  }

  getSalaryDetails():void {
    this.salaryService.getSalaryDetails(this.empId, Number(this.year))
    .subscribe((data) => {
      console.log("Data Received...");
      this.salaryDetails = data;
      // this.resetForm();

    },
    (error) => {
      alert("Error Occurs while Fetching Data....");
      // alert(this.empId);
      // alert(typeof(this.year));
    }
    )
  }
  resetForm():void {
    this.salaryDetailForm.resetForm();
  }



}
