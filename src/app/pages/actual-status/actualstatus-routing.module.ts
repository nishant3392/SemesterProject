import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualstatusPage } from './actualstatus.page';

const routes: Routes = [
  {
    path: '',
    component: ActualstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualstatusPageRoutingModule {}
