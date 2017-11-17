import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:prefer-const
import * as franc from "franc";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  franc: any;
  text: string;

  constructor() {

  }

  ngOnInit() {
  }

  checkText() {
    console.log(franc.all(this.text, {whitelist: ['eng', 'vie', 'jpn']}));
    this.text = '';
  }
}
