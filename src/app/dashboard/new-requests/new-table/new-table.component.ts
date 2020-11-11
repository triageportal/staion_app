import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../../interfaces/request';
import { NewRequestModalComponent } from '../new-request-modal/new-request-modal.component';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss'],
})
export class NewTableComponent implements OnInit {

  @Input() requests: Request[] = [];

  constructor(private modal: ModalController, private auth: AuthService) { }

  ngOnInit() {}

  openRequest(request: Request) {
    this.modal.create({
      component: NewRequestModalComponent, 
      componentProps: { request: request, loginRequired: this.auth.user.loginRequired },
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
