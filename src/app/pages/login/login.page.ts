/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(
    private auth: AuthService,
    private toaster: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  async login() {
    if (this.email && this.password) {
      this.auth.signIn(this.email, this.password);
    } else {
      this.toast('Please enter your email & password!', 'warning');
    }
    // this.router.navigate(['/actual-status']);
  }

  async toast(message, status) {
    const toast = await this.toaster.create({
      message: message,
      color: status,
      position: 'top',
    });
    toast.present();
  }
}
