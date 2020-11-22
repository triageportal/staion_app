import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../../interfaces/request';
import { NewRequestModalComponent } from '../new-request-modal/new-request-modal.component';
import { AuthService } from '../../../auth/auth.service';
import { timer } from 'rxjs'
import { RequestsService } from '../../requests.service';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss'],
})
export class NewTableComponent implements OnInit {

  @Input() requests: Request[] = [];

  constructor(private modal: ModalController, private auth: AuthService, private requestsService: RequestsService) { }

  ngOnInit() {}

  openRequest(request: Request, index) {
    console.log(request)
    this.modal.create({
      component: NewRequestModalComponent, 
      componentProps: { request: request, loginRequired: this.auth.user.loginRequired, index: index },
      cssClass: 'request-modal',
      id: 'newRequestId'
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.role);
      
    })
  }
}
