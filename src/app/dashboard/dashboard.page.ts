import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';
import { RequestsService } from './requests.service';
import { Request } from '../interfaces/request';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  newRequests: Request[] = [];
  progressRequests: Request[] = [];
  doneRequests: Request[] = [];
  progressActive = true;
  doneActive = false;

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.newRequests = this.requestsService.newRequests;

    this.progressRequests = this.requestsService.progressRequests;

    this.doneRequests = this.requestsService.doneRequests;

  }

  slideToDone () {
    this.slides.slideNext()
    this.doneActive = true;
    this.progressActive = false;
  }

  slideToProgress () {
    this.slides.slidePrev()
    this.doneActive = false;
    this.progressActive = true;
  }

}
