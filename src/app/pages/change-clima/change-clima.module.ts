import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeClimaPageRoutingModule } from './change-clima-routing.module';

import { ChangeClimaPage } from './change-clima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeClimaPageRoutingModule
  ],
  declarations: [ChangeClimaPage]
})
export class ChangeClimaPageModule {}
