import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginKeyModalComponent } from '../../login-key-modal/login-key-modal.component';
import { Request } from '../../../interfaces/request';

@Component({
  selector: 'app-done-modal',
  templateUrl: './done-modal.component.html',
  styleUrls: ['./done-modal.component.scss'],
})
export class DoneModalComponent implements OnInit {

  @Input() request: Request;
  @Input() loginRequired: boolean;

  backCover = true;
  
  constructor(private modalCntl: ModalController) { }

  ngOnInit() {}

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

  onNew () {
    if (this.loginRequired) {
      const assignee = this.onLogin()
      assignee.then(data => {
        if (data && data != 'cancel') this.changeStatus('new')     
      })
    } else {
      this.changeStatus('new')
    }
  }



  changeStatus(status) {
    this.request.status = status;
    this.onCancel('Status changed' + status)
  }

  onCancel (role) {
    this.modalCntl.dismiss(null, role, 'doneId')
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


}
