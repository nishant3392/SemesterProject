import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { AuthGuard } from './guards/auth.guard';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'notifications', component: NotificationsComponent },
  {
    path: '',
    redirectTo: 'opening-screen',
    pathMatch: 'full',
  },
  {
    path: 'opening-screen',
    loadChildren: () =>
      import('./pages/opening-screen/opening-screen.module').then(
        (m) => m.OpeningScreenPageModule
      ),
  },
  {
    path: 'poll',
    loadChildren: () =>
      import('./pages/poll/poll.module').then((m) => m.PollPageModule),
  },

  {
    path: 'zona-status',
    loadChildren: () =>
      import('./pages/zona-status/zonastatus.module').then(
        (m) => m.zonastatusPageModule
      ),
  },
  {
    path: 'actual-status',
    loadChildren: () =>
      import('./pages/actual-status/actualstatus.module').then(
        (m) => m.actualstatusPageModule
      ),
  },

  {
    path: 'change-clima',
    loadChildren: () =>
      import('./pages/change-clima/change-clima.module').then(
        (m) => m.ChangeClimaPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./pages/sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'selection',
    loadChildren: () =>
      import('./pages/selection/selection.module').then(
        (m) => m.SelectionPageModule
      ),
  },

  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
      // canActivate:[AuthGuard]
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./pages/help/help.module').then((m) => m.HelpPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
