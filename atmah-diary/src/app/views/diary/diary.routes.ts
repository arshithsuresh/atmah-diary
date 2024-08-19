import { Routes } from '@angular/router';
import { DiaryViewComponent } from './diary-view.component';
import { CAN_RECORD_TOKEN } from '../../tokens/can-record.token';

export const diaryRoutes: Routes = [
  {
    path: 'view',
    component: DiaryViewComponent,

    providers: [
      {
        provide: CAN_RECORD_TOKEN,
        useValue: false,
      },
    ],
  },

  {
    path: 'edit',
    component: DiaryViewComponent,
    providers: [
      {
        provide: CAN_RECORD_TOKEN,
        useValue: true,
      },
    ],
  },
];
