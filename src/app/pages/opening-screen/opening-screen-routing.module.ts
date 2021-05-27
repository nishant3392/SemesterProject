import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpeningScreenPage } from './opening-screen.page';

const routes: Routes = [
  {
    path: '',
    component: OpeningScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpeningScreenPageRoutingModule {}
