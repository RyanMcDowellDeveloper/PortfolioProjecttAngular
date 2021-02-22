import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(){
    window.open('mailto:charles.ryan.mcdowell@gmail.com?subject=Hi Ryan!&body=Lets Talk!');
  }
}
