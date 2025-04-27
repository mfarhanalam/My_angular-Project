import { Component, OnInit } from '@angular/core';
import { PostmethodService } from '../../config/postmethod.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.scss'
})
export class MyprofileComponent implements OnInit {
  language: any;
  constructor(private postServices: PostmethodService) {

  }

  ngOnInit(): void {
    this.checkSessionData();
  }

  async checkSessionData() {
    this.language = await this.postServices.getLanguageTemp();
  }
}
