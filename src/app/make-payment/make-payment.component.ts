import { Component, ViewChild } from '@angular/core';
import { Salary, SalaryPayment, SalaryService } from '../service/salary.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrl: './make-payment.component.scss'
})
export class MakePaymentComponent {

  @ViewChild('paymentForm')
  paymentForm!: NgForm; 

  newPayment:SalaryPayment = {empId:'', year:'', month:'', salary:0, createDateTime:new Date()};

  constructor(private salaryService: SalaryService) {}

  makePayment() {
    this.salaryService.makeSalaryPayment(this.newPayment).subscribe(
      () => {
        alert('Payment successful'); 
        
      },
      (error) => {
        alert('Error while making payment');
        console.error(error);
      }
    );
  }
  resetForm(): void {
    this.newPayment = { empId:'', year:'', month:'', salary:0, createDateTime:new Date() };
    this.paymentForm.resetForm();
  }
  



}
