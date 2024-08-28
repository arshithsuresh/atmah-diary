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
    path: '**',
    redirectTo: 'diary/view',
  },
];
