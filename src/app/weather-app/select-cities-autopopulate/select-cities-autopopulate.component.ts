import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedGetServiceService } from '../../helpers/services/shared-get-service.service';
import { UsaCitiesModel } from '../../helpers/models/usa-cities-model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-select-cities-autopopulate',
  templateUrl: './select-cities-autopopulate.component.html',
  styleUrls: ['./select-cities-autopopulate.component.css']
})
export class SelectCitiesAutopopulateComponent implements OnInit {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  cities: UsaCitiesModel[] =[];
  filteredOptions: Observable<UsaCitiesModel[]>;
  myControl = new FormControl();

  constructor(private sharedHelperService: SharedGetServiceService) { }

  ngOnInit(): void {
    this.getListOfCities();

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  getListOfCities() {
    this.sharedHelperService.GetUsaCities().subscribe(data => {
      this.cities = data;
    })
  }

  onKey() {
    if (this.myControl.value) {
      var result = this.cities.findIndex(item => this.myControl.value.toLowerCase() == item.city1.toLowerCase());

      this.notifyParent.emit(this.myControl.value);
    }
  }
  
  private _filter(value: string): UsaCitiesModel[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(option => option.city1.toLowerCase().includes(filterValue));
  }

}