import { NgModule } from '@angular/core';
import { DiaryViewComponent } from './diary-view.component';
import { Router, RouterModule } from '@angular/router';
import { diaryRoutes } from './diary.routes';

@NgModule({
  declarations: [],
  imports: [DiaryViewComponent, RouterModule.forChild(diaryRoutes)],
  exports: [RouterModule],
})
export class DiaryViewModule {}
