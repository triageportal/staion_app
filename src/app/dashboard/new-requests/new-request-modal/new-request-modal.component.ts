import { Request } from './../../../interfaces/request';
import { LoginKeyModalComponent } from './../../login-key-modal/login-key-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestsService } from '../../requests.service';

@Component({
  selector: 'app-new-request-modal',
  templateUrl: './new-request-modal.component.html',
  styleUrls: ['./new-request-modal.component.scss'],
})
export class NewRequestModalComponent implements OnInit {

  @Input() request: Request;
  @Input() loginRequired: boolean;
  @Input() index: boolean;

  backCover = true;
  
  constructor(private modalCntl: ModalController, private requestService: RequestsService) { }

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
        if (data && data != 'cancel') this.changeStatusToProgress()     
      })
    } else {
      this.changeStatusToProgress()
    }
  }

  onDone () {
    if (this.loginRequired) {
      const assignee = this.onLogin()
      assignee.then(data => {
        if (data && data != 'cancel') this.changeStatusToDone()     
      })
    } else {
      this.changeStatusToDone()
    }
  }





  changeStatusToDone() {
    this.requestService.moveNewToDone(this.index);
    this.onCancel('newToProgress');
  }

  changeStatusToProgress() {
    this.requestService.moveNewToProgress(this.index);
    this.onCancel('newToProgress');
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
    this.onCancel('assign')
  }

}
