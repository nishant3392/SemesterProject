import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ActualstatusPageRoutingModule } from './actualstatus-routing.module';
import { ActualstatusPage } from './actualstatus.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualstatusPageRoutingModule
  ],
  declarations: [ActualstatusPage]
})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class actualstatusPageModule {}
