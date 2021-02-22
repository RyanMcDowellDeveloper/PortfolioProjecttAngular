import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeesModelData } from '../../../employee/employee-details-table/models/employees-model';
import { EmployeesService } from '../../../employee/employee-details-table/services/employees.service';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employees-checkbox-group',
  templateUrl: './employees-checkbox-group.component.html',
  styleUrls: ['./employees-checkbox-group.component.css']
})
export class EmployeesCheckboxGroupComponent implements OnInit {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  employees: EmployeesModelData[];
  employeesForm: FormGroup;
  selectedEmployees: EmployeesModelData[] = [];

  constructor(private employeeService: EmployeesService, private fb: FormBuilder) {
    this.employeesForm = this.fb.group({
      employee: new FormArray([])
    });

    this.populateEmployees();
  }

  ngOnInit(): void {
  }

  populateEmployees() {
    this.employeeService.GetEmployees().subscribe(data => {
      this.employees = data;
      this.employees = this.employees.sort((a, b,) => (a.firstName > b.firstName) ? 1 : -1);
      this.addEmployeeCheckboxes();
    })
  }

  createFormGroup() {
    this.employeesForm = this.fb.group({
      employee: this.addEmployeeCheckboxes()
    })
  }

  addEmployeeCheckboxes() {
    this.employees.forEach(() => this.UsersArray.push(new FormControl(false)));
  }

  get UsersArray() {
    return <FormArray>this.employeesForm.get('employee');
  }


  getSelectedEmployees() {
    this.selectedEmployees = [];
    this.UsersArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedEmployees.push(this.employees[i]);
      }
    })
    this.notifyParent.emit(this.selectedEmployees);
  }

  checkAll() {
    this.UsersArray.controls.forEach((control, i) => {
      control.setValue(true);
    })
    this.getSelectedEmployees();
  }

  uncheckAll() {
    this.UsersArray.controls.forEach((control, i) => {
      control.setValue(false);
    })
    this.getSelectedEmployees();
  }

}
