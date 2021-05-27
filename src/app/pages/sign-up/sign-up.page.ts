/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  name: string;
  email: string;
  phone: number;
  password: string;
  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toaster: ToastController
  ) {}

  ngOnInit() {}

  async signup() {
    if (this.name && this.email && this.phone && this.password) {
      const loading = await this.loadingCtrl.create({
        message: 'processing..',
        spinner: 'crescent',
        showBackdrop: true,
      });

      loading.present();

      this.afauth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user.sendEmailVerification();
          this.afs
            .collection('user')
            .doc(data.user.uid)
            .set({
              userId: data.user.uid,
              userName: this.name,
              userEmail: this.email,
              userPhone: this.phone,
              userPassword: this.password,
            })
            .then(() => {
              loading.dismiss();
              this.toast(
                'Registration Sucess! Please Check Your Email!',
                'sucess'
              );
              this.router.navigate(['./login']);
            })
            .catch((error) => {
              loading.dismiss();
              this.toast(error.message, 'danger');
            });
        });
    }
  }

  async toast(message, status) {
    const toast = await this.toaster.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000,
    });
    toast.present();
  }
}
