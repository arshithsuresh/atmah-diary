import { Routes } from '@angular/router';
import { DiaryViewComponent } from './diary-view.component';

export const diaryRoutes: Routes = [
  {
    path: 'new',
    component: DiaryViewComponent,
  },
  {
    path: 'edit',
    component: DiaryViewComponent,
  },
];
