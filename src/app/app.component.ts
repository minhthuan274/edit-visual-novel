import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:prefer-const
import * as franc from "franc";
import * as _ from 'lodash';
import { checkCanDelete, checkSystem } from './utility/utility-check';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  franc: any;
  text: string;
  text_after_edit: string;

  constructor() {

  }

  ngOnInit() {
  }

  checkText() {
    this.text_after_edit = "";
    let splits_after_delete = [];
    let splits = _.split(this.text, '\n');
    _.forEach(splits, sentence => {
      if (!checkCanDelete(sentence)) {
        splits_after_delete.push(sentence);
      }
    });
    this.text_after_edit = splits_after_delete.join('\n');
  }

  clear() {
    this.text = "";
    this.text_after_edit = "";
  }

  removeBlankLine(senteces: string[]) {
    while (true) {
      let index = _.findIndex(senteces, sentence => {
        return _.includes(sentence, "-message id=");
      });
      if (senteces[index + 1] === '') {
        senteces.splice(index + 1, 1);
      }
      else {
        break;
      }
    }
    return senteces;
  }

  removeBlank() {
    let senteces = _.split(this.text_after_edit, '\n');
    senteces = this.removeBlankLine(senteces);
    this.text_after_edit = senteces.join('\n');
  }

}
