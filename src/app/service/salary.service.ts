import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';

  export type Salary = {
  salaryId: number | null; // Assuming salaryId can be null
  year: string;
  month: string;
  salary: number;
  createdDataTime: Date;
  empId: string;
};


@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private API_BASE_URL = 'http://localhost:8080/api/v1/salary';


  constructor(private http : HttpClient) { }

   getSalaryDetails(empId: string, year:number): Observable<Salary[]> {
    return this.http.get<Salary[]>(`${this.API_BASE_URL}/${empId}?year=${year}`);
  }

  makeSalaryPayment(salary: Salary): Observable<void> {
    return this.http.post<void>(`${this.API_BASE_URL}/make-payment`, salary);
  }



}
