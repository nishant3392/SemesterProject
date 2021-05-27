import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';

@Component({
  selector: 'app-actualstatus',
  templateUrl: './actualstatus.page.html',
  styleUrls: ['./actualstatus.page.scss'],
})
export class ActualstatusPage {
  formattedDate;
  formattedTime;
  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController) {
    this.getFormattedDate();
    this.getFormattedTime();
   }

   getFormattedDate(){
    const dateObj = new Date();

    const year = dateObj.getFullYear().toString();
    const month = dateObj.getMonth().toString();
    const date = dateObj.getDate().toString();

    const monthArray = ['Jan', 'Feb', 'Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    this.formattedDate = date + '-' +monthArray[month] + '-'+ year;
  }
  getFormattedTime(){
    const timeObj = new Date();

    const hours = timeObj.getHours().toString();
    const mimute = timeObj.getMinutes().toString();

    this.formattedTime = hours + ':' +mimute;
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
        component: NotificationsComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    return await popover.present();
  }
}
