import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  sideNavOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideNavOpenClick(clickVal){
    this.sideNavOpened = clickVal;
  }

}