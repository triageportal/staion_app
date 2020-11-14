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

  requests: Request[] = [];
  @ViewChild(IonSlides) slides: IonSlides;
  progressActive = true;
  doneActive = false;

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.requests = this.requestsService.requests;
    /* subscribe requests */


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
