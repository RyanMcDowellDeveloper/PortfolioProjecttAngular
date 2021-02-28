import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {TotalSalesByEmployeeData} from '../../models/total-sales-by-employee-data';

@Component({
  selector: 'app-total-sales-by-employee-table',
  templateUrl: './total-sales-by-employee-table.component.html',
  styleUrls: ['./total-sales-by-employee-table.component.css']
})
export class TotalSalesByEmployeeTableComponent implements OnInit, OnChanges {

  @Input() reportData: TotalSalesByEmployeeData[];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['employeeName', 'salesCount', 'salesSum'];
  dataSource: MatTableDataSource<TotalSalesByEmployeeData>;

  constructor() { }

  ngOnInit(): void {
    this.setTableProperties();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setTableProperties();
  }

  //set mat-table datasouce, sort, and paginator
  setTableProperties(){
    this.dataSource = new MatTableDataSource(this.reportData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  //set filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
