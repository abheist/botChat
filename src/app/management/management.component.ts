import { HeaderService } from './../core/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  dashboard = {
    name: 'Management View',
    url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
  };

  ngOnInit() {
    this.headerService.showheaderSubComponents = true;
  }

}
