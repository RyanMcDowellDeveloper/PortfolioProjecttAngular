import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeesModelData } from '../models/employees-model';

@Injectable({
    providedIn: 'root'
})

export class EmployeesService {
    constructor(private http: HttpClient) { }

    GetMissingInits(): Observable<any[]> {
        return this.http.get<any[]>('https://portfolioapiappservice.azurewebsites.net/getemployees');
    }
}