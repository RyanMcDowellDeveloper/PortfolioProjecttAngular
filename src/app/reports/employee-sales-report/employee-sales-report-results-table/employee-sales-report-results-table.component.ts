import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeSalesReportData } from '../models/employee-sales-report-data';

@Component({
  selector: 'app-employee-sales-report-results-table',
  templateUrl: './employee-sales-report-results-table.component.html',
  styleUrls: ['./employee-sales-report-results-table.component.css']
})
export class EmployeeSalesReportResultsTableComponent implements OnInit, OnChanges {

  @Input() reportData: EmployeeSalesReportData[];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['employeeFullName', 'salePrice', 'saleDate', 'productDescription', 'productCategory'];
  dataSource: MatTableDataSource<EmployeeSalesReportData>;

  constructor() {
   }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.reportData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.reportData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  calculateSumPrice(){ 
    return this.dataSource.filteredData.reduce((summ, v) => summ += v.salePrice, 0) 
    }

}
