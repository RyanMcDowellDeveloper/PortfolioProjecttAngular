import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeesModelData } from '../../employee/employee-details-table/models/employees-model';
import { EmployeesService } from '../../employee/employee-details-table/services/employees.service';
import { DataSource } from '@angular/cdk/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import {DeleteEmployeeComponent} from '../../delete-employee/delete-employee/delete-employee.component';

@Component({
  selector: 'app-employee-details-table',
  templateUrl: './employee-details-table.component.html',
  styleUrls: ['./employee-details-table.component.css']
})
export class EmployeeDetailsTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  // displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state','EmployeeTypeId'];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'payRate', 'action'];
  dataSource: MatTableDataSource<EmployeesModelData>;

  constructor(private employeeService: EmployeesService
    , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  editEmployee(row: EmployeesModelData) {
    this.dialog.open(EmployeeEditComponent, {
      minWidth: '25%'
      , data: { selectedEmployee: row }
    }).afterClosed().subscribe(refresh => {this.getEmployees();})
  }

  deleteEmployee(row: EmployeesModelData) {
    this.dialog.open(DeleteEmployeeComponent, {
      minWidth: '25%'
      , data: { selectedEmployee: row }
    }).afterClosed().subscribe(refresh => {this.getEmployees();})
  }

  getEmployees() {
    this.employeeService.GetEmployees().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
