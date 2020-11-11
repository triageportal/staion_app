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
  backCover = true;

  constructor(private modalCntl: ModalController) { }

  ngOnInit() {}

  onDone () {
    //this.onCancel('done')
    this.onLogin()
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
