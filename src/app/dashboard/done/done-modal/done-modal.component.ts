import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginKeyModalComponent } from '../../login-key-modal/login-key-modal.component';
import { Request } from '../../../interfaces/request';
import { RequestsService } from '../../requests.service';

@Component({
  selector: 'app-done-modal',
  templateUrl: './done-modal.component.html',
  styleUrls: ['./done-modal.component.scss'],
})
export class DoneModalComponent implements OnInit {

  @Input() request: Request;
  @Input() loginRequired: boolean;
  @Input() index: boolean;

  backCover = true;
  
  constructor(private modalCntl: ModalController, private requestService: RequestsService) { }

  ngOnInit() {}

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

  onNew () {
    if (this.loginRequired) {
      const assignee = this.onLogin()
      assignee.then(data => {
        if (data && data != 'cancel') this.changeStatusToNew()     
      })
    } else {
      this.changeStatusToNew()
    }
  }



  changeStatusToNew() {
    this.requestService.moveDoneToNew(this.index)
    this.onCancel('doneToNew');
  }

  changeStatusToProgress() {
    this.requestService.moveDoneToProgress(this.index);
    this.onCancel('doneToProgress');
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
