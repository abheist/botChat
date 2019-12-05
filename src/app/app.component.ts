import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import ChatsJson from '../assets/chats.json';
import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
    private _snackBar: MatSnackBar,
    private _FileSaverService: FileSaverService,
  ) { }

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

  dashboards = [
    {
      name: 'Management View',
      url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
    },
    {
      name: 'Administrator View',
      url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
    }
  ];

  // azureDashboardLink = 'https://portal.azure.com/#@ssaadminssainfosystems.onmicrosoft.com/dashboard/arm/subscriptions/401e0ead-f474-4d6a-a107-b970d52fd8cc/resourcegroups/ia_resourcdgroup/providers/microsoft.portal/dashboards/f358923d-747c-4eff-a0a8-252356c6b8a7-dashboard';
  azureDashboardLink = 'http://stackoverflow.com';


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
