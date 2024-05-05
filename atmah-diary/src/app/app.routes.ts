import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'diary',
    loadChildren: () =>
      import('./views/diary/diary-view.module').then(m => m.DiaryViewModule),
  },
];
