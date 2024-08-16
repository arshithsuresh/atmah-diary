import { NgModule } from '@angular/core';
import { DiaryViewComponent } from './diary-view.component';
import { RouterModule, TitleStrategy } from '@angular/router';
import { diaryRoutes } from './diary.routes';
import { IReplayService } from '../../iservices/IReplayService';
import { ReplayKeystrokeService } from './services/replay-keystroke.service';
import { IRecorderService } from '../../iservices/IRecorderService';
import { KeystrokeRecorderService } from './services/keystroke-recorder.service';
import { DiaryViewTitleResolver } from './resolver/title.title-strategy';
import { provideState, Store, StoreModule } from '@ngrx/store';
import { DiaryPageFeature } from '../../store/diary-feature';

@NgModule({
  declarations: [],
  imports: [DiaryViewComponent, RouterModule.forChild(diaryRoutes)],
  exports: [RouterModule],
  providers: [
    { provide: IReplayService, useClass: ReplayKeystrokeService },
    { provide: IRecorderService, useClass: KeystrokeRecorderService },
    { provide: TitleStrategy, useClass: DiaryViewTitleResolver },
    provideState(DiaryPageFeature),
  ],
})
export class DiaryViewModule {}
