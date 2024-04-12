import { Routes } from '@angular/router';
import { DiaryViewComponent } from './views/diary/diary-view.component';
import { DiaryViewModule } from './views/diary/diary-view.module';

export const routes: Routes = [
  {
    path: 'diary',
    loadChildren: () =>
      import('./views/diary/diary-view.module').then(m => m.DiaryViewModule),
  },
];
