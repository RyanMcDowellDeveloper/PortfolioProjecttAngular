import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('search') searchElement: ElementRef;

  @Output() sideNavOpenedClicked = new EventEmitter();
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

  openSidenavClick(){
    this.sideNavOpenedClicked.emit(!this.sideNavOpened);
  }

}
