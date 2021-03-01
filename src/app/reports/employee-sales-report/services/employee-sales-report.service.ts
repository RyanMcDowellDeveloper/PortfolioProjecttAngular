import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeSalesReportParams } from '../models/employee-sales-report-params';
import { EmployeeSalesReportData } from '../models/employee-sales-report-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSalesReportService {

  constructor(private http: HttpClient) { }

  GetEmployeeSalesReport(reportParams: EmployeeSalesReportParams): Observable<EmployeeSalesReportData[]> {
    // return this.http.post<EmployeeSalesReportData[]>('https://portfolioapiappservice.azurewebsites.net/GetEmployeeSalesReport'
    return this.http.post<EmployeeSalesReportData[]>('https://portfolioapiappservice.azurewebsites.net/GetEmployeeSalesReport'
      , JSON.stringify(reportParams)
      , { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

}
