import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';

@Component({
  selector: 'app-zonastatus',
  templateUrl: './zonastatus.page.html',
  styleUrls: ['./zonastatus.page.scss'],
})
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export class zonastatusPage {
    // currentDate;
    formattedDate;
    formattedTime;
    constructor(public popoverCtrl: PopoverController, public navCtrl: NavController) {
      // this.currentDate = new Date();
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
