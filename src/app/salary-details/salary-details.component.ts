import { Component, OnInit } from '@angular/core';
import { Salary, SalaryService } from '../service/salary.service';

@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrl: './salary-details.component.scss'
})
export class SalaryDetailsComponent implements OnInit{

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

    },
    (error) => {
      alert("Error Occurs while Fetching Data....");
    }
    )
  }



}
