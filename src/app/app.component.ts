import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import ChatsJson from '../assets/chats.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private _snackBar: MatSnackBar) { }
  selectedDate = null;
  datePickerValue = null;
  defaultScore = null;

  chats = ChatsJson;

  allChats = this.chats;
  dropdownMenu = [
    { value: 'sentinal', viewValue: 'Sentinal' },
    { value: 'gup', viewValue: 'GUP' },
    { value: 'none', viewValue: 'None' }
  ];

  scores = [
    { value: 'p', viewValue: 'P' },
    { value: 'all', viewValue: 'All' }
  ];


  addIntent(chatId, intentValue) {
    this.chats
      .filter(chat => chat.id === chatId)
      .map(chat => ({ ...chat, intent: intentValue }));
  }

  filterWithDate(chats, dateValue) {
    console.log(dateValue);
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
    this.addIntent(chatId, intentValue)
    this._snackBar.open('Saved!', 'Close');
  }

  removeFilter() {
    this.datePickerValue = undefined;
    this.selectedDate = null;
    this.allChats = this.chats;
  }

}
