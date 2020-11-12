import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-login-key-modal',
  templateUrl: './login-key-modal.component.html',
  styleUrls: ['./login-key-modal.component.scss'],
})
export class LoginKeyModalComponent implements OnInit {

  loginKey = '';
  login = { username: '', password: '' };
  submitted = false;
  noResultsFound = true;
  
  constructor(private modalCntl: ModalController, private requestsService: RequestsService) { }

  ngOnInit() {}

  onLogin(form: NgForm) {
    this.noResultsFound = true;
    this.submitted = true;
    if (form.valid) {
      const assignee = this.requestsService.getAssignee(form.value.password);
      this.noResultsFound = true
      if (assignee) {
        this.onCancel(assignee)
      } else {
        this.noResultsFound = false;
      }      
    }
  }

  onFocus() {
    console.log('focus');
    
  }

  onCancel (data) {
    this.modalCntl.dismiss('loginKey', data, 'loginKeyId')
  }

}
