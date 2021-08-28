import { StorageServiceService } from './../services/storage-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  tenant: string;
  input: string = null;

  constructor(private storageService: StorageServiceService) {

  }

  ngOnInit() {
    if(this.storageService.get('tenant')){
      this.storageService.get('tenant').then((value => {
        this.input = value;
        this.tenant = value;
      }));
    }
  }

  getTenant(tenant){
    this.tenant = tenant;
  }

}
