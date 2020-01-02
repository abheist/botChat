import { HeaderService } from './../shared/header/header.service';
import { Component, OnInit } from '@angular/core';
import ChatsJson from '../../assets/chats.json';
import { MatSnackBar } from '@angular/material';
import { FileSaverService } from 'ngx-filesaver';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.scss']
})
export class DatascienceComponent implements OnInit {

  constructor(
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar,
    // tslint:disable-next-line: variable-name
    private _FileSaverService: FileSaverService,
    private fb: FormBuilder,
    private headerService: HeaderService
  ) { }
  displayedColumns: string[] = ['Sentences', 'intent', 'probability'];
  myForm: FormGroup;
  showSpinner = false;
  selectedDate = null;
  datePickerValue = new Date();
  defaultScore = null;
  dataSource = [];
  chats = ChatsJson;
  addCategoryValue = '';
  addSubCategoryValue = { Sentinel: '', GUP: '' };
  intentValues: Array<string>;
  dataSourceOriginal = [{ Sentences: 'what is SAN', intent: 'Sentinel', probability: 1.0 },
  { Sentences: 'san Validity?', intent: 'san-validity', probability: 0.9452662722 },
  { Sentences: 'What is a GUP?', intent: 'Gup', probability: 0.746031746 },
  { Sentences: 'SAN', intent: 'Sentinel', probability: 0.5555555556 },
  { Sentences: 'san engaging parties?', intent: 'engaging_parties', probability: 0.8373015873 },
  { Sentences: 'what is sam?', intent: 'Gup', probability: 0.9444444444 },
  { Sentences: 'what is gip', intent: 'Gup', probability: 0.9889807163 },
  { Sentences: 'can you tell me about gpu ?', intent: 'Gup', probability: 0.7392883079 }];


  dataSourceOriginal1 = [{ Sentences: 'what is SAN', intent: '', probability: 0 },
  { Sentences: 'san Validity?', intent: '', probability: 0 },
  { Sentences: 'What is a GUP?', intent: '', probability: 0 },
  { Sentences: 'SAN', intent: '', probability: 0 },
  { Sentences: 'san engaging parties?', intent: '', probability: 0 },
  { Sentences: 'what is sam?', intent: '', probability: 0 },
  { Sentences: 'what is gip', intent: '', probability: 0 },
  { Sentences: 'can you tell me about gpu ?', intent: '', probability: 0 }];



  allChats = this.chats;
  dropdownMenu = [
    { value: 'sentinal', viewValue: 'Sentinel' },
    { value: 'gup', viewValue: 'GUP' },
    { value: 'san-validity', viewValue: 'San validity' },
    { value: 'san-engagement', viewValue: 'San engagement' },
    { value: 'greetings', viewValue: 'Greetings' }
  ];

  addCategory: any = [{ categoryName: 'Sentinel', subCategory: ['Sentinol', 'Sentinql', 'Sentinwl', 'Sentinrl'] },
  { categoryName: 'GUP', subCategory: ['GQP', 'GWP', 'GEP', 'GRP'] }];

  scores = [
    { value: 'p', viewValue: 'P' },
    { value: 'all', viewValue: 'All' }
  ];

  dashboard = {
    name: 'Management View',
    url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
  };

  subdashboard = {
    name: 'Dashboard View',
    url: 'https://app.powerbi.com/reportEmbed?reportId=92edb2bb-4709-48a0-ae9f-c52ab713b4be&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
  };


  ngOnInit() {
    this.headerService.showheaderSubComponents = true;
    this.myForm = this.fb.group({
      nOfIterations: '',
      nOfTopWords: '',
      refresh: '',
      seedConfidence: '',
      minSentenceLength: '',
      cBelConfScore: '',
      date: ''
    });

    const selfLearningData = JSON.parse(localStorage.getItem('data'));
    const addCategoryData = JSON.parse(localStorage.getItem('addCategoryData'));
    if (selfLearningData) {
      this.myForm.controls.nOfIterations.setValue(selfLearningData.nOfIterations);
      this.myForm.controls.nOfTopWords.setValue(selfLearningData.nOfTopWords);
      this.myForm.controls.refresh.setValue(selfLearningData.refresh);
      this.myForm.controls.seedConfidence.setValue(selfLearningData.seedConfidence);
      this.myForm.controls.minSentenceLength.setValue(selfLearningData.minSentenceLength);
      this.myForm.controls.cBelConfScore.setValue(selfLearningData.cBelConfScore);
      this.myForm.controls.date.setValue(selfLearningData.date);
    }

    if (addCategoryData) {
      this.addCategory = JSON.parse(JSON.stringify(addCategoryData));
    }
    this.intentValues = this.addCategory.map(data => {
      return data.categoryName.toLowerCase();
    });
    this.filterFromAddCtegories();

    console.log('this.intentValues', this.intentValues);
    console.log('selfLearningData', selfLearningData);
  }

  addNote(addCategoryValue) {
    const obj = { categoryName: addCategoryValue, subCategory: [] };
    this.addCategory.push(obj);
    this.intentValues.push(addCategoryValue);
    console.log(' this.addCategory', this.addCategory);
  }

  saveCategory() {

    this.showSpinner = true;
    setTimeout(() => {
      localStorage.setItem('addCategoryData', JSON.stringify(this.addCategory));
      console.log('this.intentValues final', this.intentValues);
      // this.filterFromAddCtegories();
      this.showSpinner = false;
    }, 2000);
  }

  onSubmit() {
    this.showSpinner = true;
    setTimeout(() => {
      localStorage.setItem('data', JSON.stringify(this.myForm.value));
      console.log('this.intentValues final', this.intentValues);
      this.filterFromAddCtegories();
      this.showSpinner = false;
    }, 3500);
  }

  filterFromAddCtegories() {
    this.dataSource = [];
    const filteredArr = [];
    const unfilteredArr = [];
    const tempArr = JSON.parse(JSON.stringify(this.dataSourceOriginal));
    if (this.intentValues.length == 0) {
      this.dataSource = JSON.parse(JSON.stringify(this.dataSourceOriginal1));
    } else {
      for (let i = 0; i < this.intentValues.length; i++) {
        const filterData = this.dataSourceOriginal.filter(data => {
          return data.intent.toLowerCase() == this.intentValues[i].toLowerCase();
        });
        this.dataSource.push(...filterData);   // filtered data
      }
    }

    for (let i = 0; i < this.dataSourceOriginal.length; i++) {
      const filterData = this.intentValues.filter(data => {
        return data.toLowerCase() == this.dataSourceOriginal[i].intent.toLowerCase();
      });
      if (filterData.length == 0) {
        // this.dataSource.push(...filterData);
        // } else {
        const obj = JSON.parse(JSON.stringify(this.dataSourceOriginal[i]));
        console.log('obj', obj);
        obj.intent = '';
        obj.probability = 0;
        this.dataSource.push(obj);
      }
    }
  }

  deleteCategory(categoryName) {
    for (let i = 0; i < this.addCategory.length; i++) {
      if (this.addCategory[i].categoryName == categoryName) {
        this.addCategory.splice(i, 1);
      }
    }
    const intentIndexValue = this.intentValues.indexOf(categoryName);
    this.intentValues.splice(intentIndexValue, 1);
    console.log('deleted this.intentValues', this.intentValues);
  }

  deleteSubCategory(categoryName, categorySubName) {
    for (let i = 0; i < this.addCategory.length; i++) {
      if (this.addCategory[i].categoryName == categoryName) {
        const subCatIndex = this.addCategory[i].subCategory.indexOf(categorySubName);
        this.addCategory[i].subCategory.splice(subCatIndex, 1);
      }
    }
  }


  addSubCategory(categoryName, categorySubValue) {
    for (let i = 0; i < this.addCategory.length; i++) {
      if (this.addCategory[i].categoryName == categoryName) {
        this.addCategory[i].subCategory.push(categorySubValue);
      }
    }
    console.log('this.addCategory', this.addCategory);
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
