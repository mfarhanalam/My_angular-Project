import { Component, OnInit } from '@angular/core';
import { SubService } from '../../apppojo/interface/SubService';
import { ApiResponse } from '../../apppojo/responsemodel/ApiResponse';
import { Router } from '@angular/router';
import { PostmethodService } from '../../config/postmethod.service';
import { Service } from '../../apppojo/interface/Service';
import { SessionStatic } from '../../config/SessionStatic';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  subServiceList: Array<SubService>;
  serviceList: Array<Service>;
  filteredSubServiceList: SubService[] = [];
  serviceIds: any;
  language: any;
  selectedTab: string = 'all';
  constructor(private postServices: PostmethodService, private router: Router) {

  }

  ngOnInit(): void {
    this.configureData();
  }

  configureData() {
    this.getSubServiceList();
    this.getServiceList();
    this.configureSessionData();
  }

  async configureSessionData() {
    this.language = await this.postServices.getLanguageTemp();
    this.serviceIds = await this.postServices.getStorage(SessionStatic.serviceIds);
    if (!!this.serviceIds) {
      // this.handleTabClick(this.serviceIds);
    } else {
      console.log("eeor");
    }
  }


  async getSubServiceList() {
    let apiResponse: ApiResponse = await this.postServices.apiCallsLocal('assets/dummyjson/subservice.json');
    if (apiResponse.status == 0) {
      this.subServiceList = apiResponse.data;
      this.filteredSubServiceList = this.subServiceList;
    } else {
    }
  }

  async getServiceList() {
    let apiResponse: ApiResponse = await this.postServices.apiCallsLocal('assets/dummyjson/service.json');
    if (apiResponse.status == 0) {
      this.serviceList = apiResponse.data;

    }
  }



  handleTabClick(serviceId: string) {
    this.selectedTab = serviceId;
    if (serviceId === 'all') {
      this.filteredSubServiceList = this.subServiceList;
    } else {
      this.filteredSubServiceList = this.subServiceList.filter(
        (subService) => subService.serviceId === serviceId
      );
      
    }
    const clickedTab = event.target as HTMLElement;
    clickedTab.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  }
}
