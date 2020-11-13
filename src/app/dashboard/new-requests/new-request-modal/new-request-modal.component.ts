import { Request } from './../../../interfaces/request';
import { LoginKeyModalComponent } from './../../login-key-modal/login-key-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-request-modal',
  templateUrl: './new-request-modal.component.html',
  styleUrls: ['./new-request-modal.component.scss'],
})
export class NewRequestModalComponent implements OnInit {

  @Input() request: Request;
  @Input() loginRequired: boolean;

  backCover = true;
  
  constructor(private modalCntl: ModalController) { }

  ngOnInit() {}

  onAssign () {
    const assignee = this.onLogin()
    assignee.then(data => {
      if (data && data != 'cancel') this.assign(data);     
    })
  }

  onProgress () {
    if (this.loginRequired) {
      const assignee = this.onLogin()
      assignee.then(data => {
        if (data && data != 'cancel') this.changeStatus('progress')     
      })
    } else {
      this.changeStatus('progress')
    }
  }

  onDone () {
    if (this.loginRequired) {
      const assignee = this.onLogin()
      assignee.then(data => {
        if (data && data != 'cancel') this.changeStatus('done')     
      })
    } else {
      this.changeStatus('done')
    }
  }



  changeStatus(status) {
    this.request.status = status;
    this.onCancel('Status changed' + status)
  }

  onCancel (role) {
    this.modalCntl.dismiss(null, role, 'newRequestId')
  }

  onLogin(){
    this.backCover = false;
    
    return this.modalCntl.create({
      component: LoginKeyModalComponent, 
      cssClass: 'login-modal-css',
      id: 'loginKeyId'
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      this.backCover = true;
      return resultData.role
    })
  }

  assign(data){
    this.request.assignee = data.name;
    this.request.assigneeId = data.id;  
  }

}
