import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss'],
})
export class TenantComponent implements OnInit {
  @Output() tenant = new EventEmitter<any>();
  input: string;
  constructor(private storageService: StorageServiceService) { }

  ngOnInit() {
    if(this.storageService.get('tenant')){
      this.storageService.get('tenant').then((value => {
        this.input = value;
      }));
    }
  }

  salvar() {
    this.storageService.set('tenant', this.input).then((value => {
      this.tenant.emit(this.input);
    }));
  }

}
