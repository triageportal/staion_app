import { AuthService } from './../../../auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DoneModalComponent } from '../done-modal/done-modal.component';

@Component({
  selector: 'app-done-table',
  templateUrl: './done-table.component.html',
  styleUrls: ['./done-table.component.scss'],
})
export class DoneTableComponent implements OnInit {

  @Input() requests: Request[] = [];

  constructor(private modal: ModalController, private auth: AuthService) { }

  ngOnInit() {}

  openRequest(request: Request, index) {
    this.modal.create({
      component: DoneModalComponent, 
      componentProps: { request: request, loginRequired: this.auth.user.loginRequired, index: index },
      cssClass: 'request-modal',
      id: 'doneId'
    }).then(modalEl => {
      modalEl.present()
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.role);
      
    })
  }


}
