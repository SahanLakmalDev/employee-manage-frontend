import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

export type Employee = {
  empId:string,
  name:string,
  contact:string,
  address:string,
  status:boolean
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private API_BASE_URL = 'http://localhost:8080/api/v1/employee';

  constructor(private http : HttpClient) { }

  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.API_BASE_URL, employee);
  }

  updateEmployee(empId:string, employee:Employee):Observable<Employee> {
    return this.http.patch<Employee>(`${this.API_BASE_URL}/${empId}`, employee);
  }

  deactivateEmployee(empId: string): Observable<void> {
    const url = `${this.API_BASE_URL}/deactivate/${empId}`;
    return this.http.patch<void>(url, {});
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_BASE_URL);
  }

  getActiveEmployees(): Observable<Employee[]> {
    const url = `${this.API_BASE_URL}/active`;
    return this.http.get<Employee[]>(url);
  }
  getAllEmployees2(page: number, pageSize: number): Observable<Employee[]> {
    const url = `${this.API_BASE_URL}?page=${page}&pageSize=${pageSize}`;
    return this.http.get<Employee[]>(url);
  }

}
