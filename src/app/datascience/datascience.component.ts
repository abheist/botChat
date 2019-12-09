import { Component, OnInit } from '@angular/core';
import ChatsJson from '../../assets/chats.json';
import { MatSnackBar } from '@angular/material';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.scss']
})
export class DatascienceComponent implements OnInit {

  constructor (private _snackBar: MatSnackBar,
    private _FileSaverService: FileSaverService, ) {
  }

  selectedDate = null;
  datePickerValue = null;
  defaultScore = null;
  chats = ChatsJson;


  allChats = this.chats;
  dropdownMenu = [
    { value: 'sentinal', viewValue: 'Sentinal' },
    { value: 'gup', viewValue: 'GUP' },
    { value: 'san-validity', viewValue: 'San validity' },
    { value: 'san-engagement', viewValue: 'San engagement' },
    { value: 'greetings', viewValue: 'Greetings' }
  ];

  scores = [
    { value: 'p', viewValue: 'P' },
    { value: 'all', viewValue: 'All' }
  ];

  subdashboard = {
    name: 'Dashboard View',
    url: 'https://app.powerbi.com/reportEmbed?reportId=92edb2bb-4709-48a0-ae9f-c52ab713b4be&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
  };

  ngOnInit() {
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


  removeFilter() {
    this.datePickerValue = undefined;
    this.selectedDate = null;
    this.allChats = this.chats;
  }


  saveTheData(chatId, intentValue) {
    this.addIntent(chatId, intentValue)
    this._snackBar.open('Saved!', 'Close', {
      duration: 500,
    });
  }

}
