import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeesModelData } from '../../employee/employee-details-table/models/employees-model';

@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeService {

  constructor(private http: HttpClient) { }

  DeleteEmployee(employeeId: number): Observable<Response> {
    console.log(employeeId);
    return this.http.delete<Response>('https://portfolioapiappservice.azurewebsites.net/DeleteEmployee?employeeId=' + employeeId);
  }
}
