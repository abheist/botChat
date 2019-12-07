import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import ChatsJson from '../assets/chats.json';
import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';
import { MatCardModule } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  constructor(
    private _snackBar: MatSnackBar,
    private _FileSaverService: FileSaverService,
    private fb: FormBuilder
  ) { }
  myForm:FormGroup;

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

  dashboard = {
    name: 'Management View',
    // url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
    url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
  };

  subdashboard = {
    name: 'Dashboard View',
    // url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
    url: 'https://app.powerbi.com/reportEmbed?reportId=92edb2bb-4709-48a0-ae9f-c52ab713b4be&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
  };

  // azureDashboardLink = 'https://portal.azure.com/#@ssaadminssainfosystems.onmicrosoft.com/dashboard/arm/subscriptions/401e0ead-f474-4d6a-a107-b970d52fd8cc/resourcegroups/ia_resourcdgroup/providers/microsoft.portal/dashboards/f358923d-747c-4eff-a0a8-252356c6b8a7-dashboard';
  azureDashboardLink = 'http://stackoverflow.com';

  ngOnInit(){
    this.myForm = this.fb.group({
      nOfIterations: '',
      nOfTopWords: '',
      refresh: '',
      seedConfidence: '',
      minSentenceLength: '',
      cBelConfScore: '',
      date:''
    });

    let selfLearningData = JSON.parse(localStorage.getItem("data")); 
    if(selfLearningData){
      this.myForm.controls['nOfIterations'].setValue(selfLearningData['nOfIterations']);
      this.myForm.controls['nOfTopWords'].setValue(selfLearningData['nOfTopWords']);
      this.myForm.controls['refresh'].setValue(selfLearningData['refresh']);
      this.myForm.controls['seedConfidence'].setValue(selfLearningData['seedConfidence']);
      this.myForm.controls['minSentenceLength'].setValue(selfLearningData['minSentenceLength']);
      this.myForm.controls['cBelConfScore'].setValue(selfLearningData['cBelConfScore']);
      this.myForm.controls['date'].setValue(selfLearningData['date']);
    }
    console.log("selfLearningData",selfLearningData);
  }

  onSubmit(){
    console.log("form.value",this.myForm.value);
    localStorage.setItem("data",JSON.stringify(this.myForm.value));
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

  saveTheData(chatId, intentValue) {
    this.addIntent(chatId, intentValue)
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
