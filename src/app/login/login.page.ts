import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = { username: '', password: '' };
  submitted = false;
  constructor(private router: Router, private auth: AuthService, private spinner: LoadingController) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      console.log(form.value);
      this.auth.login()
      this.spinner.create({
        keyboardClose: true, message: 'Logging in...'
      })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          loadingEl.dismiss();
          this.router.navigateByUrl('/dashboard');
        }, 1500)
      })
      
      
    }
  }

  onSignup() {
    
  }
}
