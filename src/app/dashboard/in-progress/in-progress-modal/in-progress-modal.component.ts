import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../../interfaces/request';
import { ModalController } from '@ionic/angular';
import { LoginKeyModalComponent } from '../../login-key-modal/login-key-modal.component';
import { RequestsService } from '../../requests.service';

@Component({
  selector: 'app-in-progress-modal',
  templateUrl: './in-progress-modal.component.html',
  styleUrls: ['./in-progress-modal.component.scss'],
})
export class InProgressModalComponent implements OnInit {

  @Input() request: Request;
  @Input() loginRequired: boolean;
  @Input() index: boolean;

  backCover = true;

  constructor(private modalCntl: ModalController, private requestService: RequestsService) { }

  ngOnInit() {}

  onBackToNew () {
    if (this.loginRequired) {
      const assignee = this.onLogin()
      assignee.then(data => {
        if (data && data != 'cancel') this.changeStatusToNew()     
      })
    } else {
      this.changeStatusToNew() 
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



  changeStatusToNew() {
    this.requestService.moveProgressToNew(this.index)
    this.onCancel('progressToNew');
  }

  changeStatusToDone() {
    this.requestService.moveProgressToDone(this.index);
    this.onCancel('progressTodone');
  }


  onCancel (role) {
    this.modalCntl.dismiss(null, role, 'inProgressId')
  }

  onLogin() {
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
