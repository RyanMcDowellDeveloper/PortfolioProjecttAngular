import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TotalSalesByEmployeeParams} from '../models/total-sales-by-employee-params';
import {TotalSalesByEmployeeData} from '../models/total-sales-by-employee-data';

@Injectable({
  providedIn: 'root'
})
export class TotalSalesByEmployeeService {

  constructor(private http: HttpClient) { }

  GetTotalSalesByEmployeeReport(reportParams: TotalSalesByEmployeeParams): Observable<TotalSalesByEmployeeData[]> {
    return this.http.post<TotalSalesByEmployeeData[]>('https://portfolioapiappservice.azurewebsites.net/GetEmployeeTotalSalesReport'
      , JSON.stringify(reportParams)
      , { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

}
