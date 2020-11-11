import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-key-modal',
  templateUrl: './login-key-modal.component.html',
  styleUrls: ['./login-key-modal.component.scss'],
})
export class LoginKeyModalComponent implements OnInit {

  loginKey = '';
  login = { username: '', password: '' };
  submitted = false;
  
  constructor(private modalCntl: ModalController) { }

  ngOnInit() {}

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      console.log(form.value);
      //this.onCancel('done')
      
    }
  }

  onCancel (role) {
    this.modalCntl.dismiss('loginKey', role, 'loginKeyId')
  }

}
