import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeClimaPage } from './change-clima.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeClimaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeClimaPageRoutingModule {}
