import { NgModule } from '@angular/core';
import { DiaryViewComponent } from './diary-view.component';
import { provideRouter, RouterModule, TitleStrategy } from '@angular/router';
import { diaryRoutes } from './diary.routes';
import { IReplayService } from '../../iservices/IReplayService';
import { ReplayKeystrokeService } from './services/replay-keystroke.service';
import { IRecorderService } from '../../iservices/IRecorderService';
import { KeystrokeRecorderService } from './services/keystroke-recorder.service';
import { DiaryViewTitleResolver } from './resolver/title.title-strategy';
import { provideState, Store, StoreModule } from '@ngrx/store';
import { DiaryPageFeature } from '../../store/diary-feature';
import { IDiaryDataService } from '../../iservices/IDiaryDataService';
import { DiaryDataService } from './services/diary-data.service';
import { provideEffects } from '@ngrx/effects';
import * as DiaryEffects from '../../store/diary-feature/effects';
import { KeyboardSoundsService } from './services/keyboard-sounds.service';
import { SharedActionsService } from './services/shared-actions.service';

@NgModule({
  declarations: [],
  imports: [DiaryViewComponent],
  exports: [RouterModule],
  providers: [
    { provide: IReplayService, useClass: ReplayKeystrokeService },
    { provide: IRecorderService, useClass: KeystrokeRecorderService },
    { provide: TitleStrategy, useClass: DiaryViewTitleResolver },
    { provide: IDiaryDataService, useClass: DiaryDataService },
    SharedActionsService,
    KeyboardSoundsService,
    provideRouter(diaryRoutes),
    provideState(DiaryPageFeature),
    provideEffects(DiaryEffects),
  ],
})
export class DiaryViewModule {}
