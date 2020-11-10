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
    this.modalCntl.dismiss(null, role)
  }

  onLogin() {
    this.modalCntl.create({
      component: LoginKeyModalComponent, 
      cssClass: 'login-modal-css',
      id: 'loginKey'
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.role);
      
    })
  }

}
