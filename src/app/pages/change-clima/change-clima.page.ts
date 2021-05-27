import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { ClimateTempService } from 'src/app/services/climate-temp.service';

@Component({
  selector: 'app-change-clima',
  templateUrl: './change-clima.page.html',
  styleUrls: ['./change-clima.page.scss'],
})

export class ChangeClimaPage implements OnInit {
  constructor(
    private router: Router,
    private climateTempservice: ClimateTempService
  ) {}

  ngOnInit() {
    this.climateTempservice.getTemp().subscribe((res) => {
      console.log('RES ClimateService', res);

      // getting the firebase data here for the climate temp
    });
  }
}
