import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { zonastatusPage } from './zonastatus.page';

const routes: Routes = [
  {
    path: '',
    component: zonastatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class zonastatusPageRoutingModule {}
