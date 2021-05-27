import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpeningScreenPageRoutingModule } from './opening-screen-routing.module';

import { OpeningScreenPage } from './opening-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpeningScreenPageRoutingModule
  ],
  declarations: [OpeningScreenPage]
})
export class OpeningScreenPageModule {}
