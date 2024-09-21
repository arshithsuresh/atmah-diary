import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { DiaryPageFeature } from './store/diary-feature';

export const routes: Routes = [
  {
    path: 'diary',
    loadChildren: () =>
      import('./views/diary/diary-view.module').then(m => m.DiaryViewModule),
    providers: [],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then(m => m.LoginModule),
    providers: [],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
    providers: [],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
