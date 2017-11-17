import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:prefer-const
import * as franc from "franc";
import * as _ from 'lodash';

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
    // console.log(franc.all(this.text, {whitelist: ['eng', 'vie', 'jpn']}));
    let splits = _.split(this.text, '\n');
    _.forEach(splits, text => {
      this.checkIsEnglish(text);
    });
    // this.text = '';
  }


  checkIsEnglish(text: string) {
    console.log(text);
    console.log(franc.all(text, {whitelist: ['eng', 'vie', 'jpn']}));
  }
}
