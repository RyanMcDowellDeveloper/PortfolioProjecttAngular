import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @ViewChild('search') searchElement: ElementRef;

  searchInput: string;
  searchInputVisibility: string = 'none';
  searchIconVisibility: string = 'initial';
  sideNavOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  searchControlsSetVisibility() {
    if (this.searchIconVisibility.toUpperCase() == 'INITIAL') {
      this.searchInput = '';
      this.searchInputVisibility = 'initial';
      this.searchIconVisibility = 'none';

      setTimeout(() => { // this will make the execution after the above boolean has changed
        this.searchElement.nativeElement.focus();
      }, 0);

    }
    else {
      this.searchInputVisibility = 'none';
      this.searchIconVisibility = 'initial';
    }
  }

}