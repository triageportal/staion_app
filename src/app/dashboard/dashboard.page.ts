import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestsService } from './requests.service';
import { Request } from '../interfaces/request';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  requests: Request[] = [];

  constructor(private modal: ModalController, private requestsService: RequestsService) { }

  ngOnInit() {
    this.requests = this.requestsService.requests;
    /* subscribe requests */


  }

}
