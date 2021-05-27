import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  constructor(public alertCtrl: AlertController) { }
  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Have a fun day!',
      message: `<img src="./assets/images/popup3.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['OK']
    });
    await alert.present();
    /* const result = await alert.onDidDismiss();
    console.log(result);  */
  }

  async showAlert1() {
    const alert1 = await this.alertCtrl.create({
      header: 'Already sweating...',
      message: `<img src="./assets/images/popup5.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['OK']
    });
    await alert1.present();
  }

  async showAlert2() {
    const alert2 = await this.alertCtrl.create({
      header: 'Survey...',
      message: `<img src="./assets/images/popup1.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['OK']
    });
    await alert2.present();
  }

  async showAlert3() {
    const alert3 = await this.alertCtrl.create({
      header: 'Feel hot',
      message: `<img src="./assets/images/popup2.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['OK']
    });
    await alert3.present();
  }

  async showAlert4() {
    const alert4 = await this.alertCtrl.create({
      header: 'Ideal humidity',
      message: `<img src="./assets/images/popup6.png" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['OK']
    });
    await alert4.present();
  }

  ngOnInit() {}

  }
