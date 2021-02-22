import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeesModelData } from '../../employee/employee-details-table/models/employees-model';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeServiceService {

  constructor(private http: HttpClient) { }

  CreateEmployee(employee: EmployeesModelData) {
    console.log(employee);
    return this.http.post<EmployeesModelData>('https://portfolioapiappservice.azurewebsites.net/CreateEmployee'
      , JSON.stringify(employee)
      , { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }
}
