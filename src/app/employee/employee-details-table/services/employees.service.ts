import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeesModelData } from '../models/employees-model';

@Injectable({
    providedIn: 'root'
})

export class EmployeesService {
    constructor(private http: HttpClient) { }

    GetEmployees(): Observable<EmployeesModelData[]> {
        return this.http.get<EmployeesModelData[]>('https://localhost:44309/getemployees');
    }

    UpdateEmployee(employee: EmployeesModelData) {
        return this.http.put<EmployeesModelData>('https://localhost:44309/EditEmployee'
        , JSON.stringify(employee)
        , { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        );
    }
}
