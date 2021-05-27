import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { zonastatusPageRoutingModule } from './zonastatus-routing.module';

import { zonastatusPage } from './zonastatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    zonastatusPageRoutingModule
  ],
  declarations: [zonastatusPage]
})
export class zonastatusPageModule {}
