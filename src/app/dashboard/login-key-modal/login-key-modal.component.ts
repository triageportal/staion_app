import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login-key-modal',
  templateUrl: './login-key-modal.component.html',
  styleUrls: ['./login-key-modal.component.scss'],
})
export class LoginKeyModalComponent implements OnInit {

  constructor(private modalCntl: ModalController) { }

  ngOnInit() {}

  onLogin () {
    this.onCancel('done')
  }

  onCancel (role) {
    this.modalCntl.dismiss('loginKey', role, 'loginKey')
  }

}
