import { AppService } from './../../core/app.service';
import { SpinnerService } from './../../core/spinner/spinner.service';
import { Component, OnInit } from '@angular/core';
import ChatsJson from '../../../assets/chats.json';
import { MatSnackBar } from '@angular/material';
import { FileSaverService } from 'ngx-filesaver';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-intent-mapper',
  templateUrl: './intent-mapper.component.html',
  styleUrls: ['./intent-mapper.component.scss']
})
export class IntentMapperComponent implements OnInit {

  constructor( // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar,
    // tslint:disable-next-line: variable-name
    private _FileSaverService: FileSaverService,
    private fb: FormBuilder,
    private spinnerService: SpinnerService,
    private appService: AppService) { }

  myForm: FormGroup;
  showSpinner = false;
  selectedDate = null;
  datePickerValue = new Date();
  defaultScore = null;
  dataSource = [];
  chats = ChatsJson;
  addCategoryValue = '';
  addSubCategoryValue = { Sentinel: '', GUP: '' };

  allChats = this.chats;
  dropdownMenu = [
    { value: 'sentinal', viewValue: 'Sentinel' },
    { value: 'gup', viewValue: 'GUP' },
    { value: 'san-validity', viewValue: 'San validity' },
    { value: 'san-engagement', viewValue: 'San engagement' },
    { value: 'greetings', viewValue: 'Greetings' }
  ];

  scores = [
    { value: 'p', viewValue: 'P' },
    { value: 'all', viewValue: 'All' }
  ];




  ngOnInit() {
    this.myForm = this.fb.group({
      nOfIterations: '',
      nOfTopWords: '',
      refresh: '',
      seedConfidence: '',
      minSentenceLength: '',
      cBelConfScore: '',
      date: ''
    });

  }


  addIntent(chatId, intentValue) {
    this.chats
      .filter(chat => chat.id === chatId)
      .map(chat => ({ ...chat, intent: intentValue }));
  }

  downloadData() {
    const fileName = `chats.json`;
    const fileType = this._FileSaverService.genType(fileName);
    const txtBlob = new Blob([JSON.stringify(this.chats)], { type: fileType });
    this._FileSaverService.save(txtBlob, fileName);
    this.appService.showSpinnerOnLoad();
  }

  filterWithDate(chats, dateValue) {
    if (dateValue != null) {
      return chats.filter(chat => {
        return new Date(chat.timestamp).getDate() === new Date(dateValue).getDate();
      });
    } else {
      return chats;
    }
  }

  filterWithScore(chats, score) {
    if (score) {
      if (score === 'p') {
        return chats.filter(chat => chat.score <= 50);
      }
      if (score === 'all') {
        return chats;
      }
    }
  }

  filter() {
    let newChats = this.chats;
    if (this.datePickerValue != null && this.defaultScore != null) {
      newChats = this.filterWithDate(newChats, this.datePickerValue);
      newChats = this.filterWithScore(newChats, this.defaultScore);
    } else if (this.datePickerValue != null) {
      newChats = this.filterWithDate(newChats, this.datePickerValue);
    } else if (this.defaultScore != null) {
      newChats = this.filterWithScore(newChats, this.defaultScore);
    }
    this.allChats = newChats;
  }

  saveTheData(chatId, intentValue) {
    this.addIntent(chatId, intentValue);
    this._snackBar.open('Saved!', 'Close', {
      duration: 500,
    });
  }

  removeFilter() {
    this.datePickerValue = undefined;
    this.selectedDate = null;
    this.allChats = this.chats;
  }

}
