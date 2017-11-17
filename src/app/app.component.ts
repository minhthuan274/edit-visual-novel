import { Component, OnInit } from '@angular/core';

declare var Franc: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  franc: any;

  constructor() {

  }

  ngOnInit() {
    this.franc = new Franc();
    let text = 'Hi everyone';
    console.log(this.franc(text));
  }
}
