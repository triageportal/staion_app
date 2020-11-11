import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../../interfaces/request';
import { ModalController } from '@ionic/angular';
import { LoginKeyModalComponent } from '../../login-key-modal/login-key-modal.component';

@Component({
  selector: 'app-in-progress-modal',
  templateUrl: './in-progress-modal.component.html',
  styleUrls: ['./in-progress-modal.component.scss'],
})
export class InProgressModalComponent implements OnInit {

  @Input() request: Request;
  @Input() loginRequired: boolean;
  backCover = true;

  constructor(private modalCntl: ModalController) { }

  ngOnInit() {}

  onBackToNew() {
    if (this.loginRequired) {
      this.onLogin()
    }
  }

  
  onDone () {
    if (this.loginRequired) {
      this.onLogin()
    }
  }


  onCancel (role) {
    this.modalCntl.dismiss(null, role, 'inProgressId')
  }

  onLogin() {
    this.backCover = false;
    console.log(this.backCover);
    
    this.modalCntl.create({
      component: LoginKeyModalComponent, 
      cssClass: 'login-modal-css',
      id: 'loginKeyId'
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.role);
      this.backCover = true;
      this.onCancel('login')
    })
  }
}
