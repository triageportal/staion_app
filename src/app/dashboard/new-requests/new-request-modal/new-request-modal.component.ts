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
  backCover = true;
  
  constructor(private modalCntl: ModalController) { }

  ngOnInit() {}

  onProgress () {
    //this.onCancel('progress')
    this.onLogin()
  }

  onDone () {
    this.onCancel('done')
  }

  onCancel (role) {
    this.modalCntl.dismiss(null, role, 'newRequestId')
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
