import { inject, Injectable } from '@angular/core';
import { IMediaControlService } from '../../../iservices/IMediaControlService';
import { Store } from '@ngrx/store';
import { DiaryPageFeature, DiaryPageState } from '../../../store/diary-feature';
import { take } from 'rxjs';
import { DEFAULT_RECORD_EVENT } from '../../../constants/default-values.constants';
import { DiaryPageActions } from '../../../store/diary-feature/actions';

@Injectable()
export class MediaControlService extends IMediaControlService {
  private store = inject(Store<DiaryPageState>);
  constructor() {
    super();
  }

  play(): void {
    if (!this._replayService.hasRecordEvent) {
      console.log('Starting from beginning');
      this.store
        .select(DiaryPageFeature.selectRecordEvent)
        .pipe(take(1))
        .subscribe(recordData => {
          this._replayService.setRecordEvent(
            recordData ?? DEFAULT_RECORD_EVENT,
            false
          );
        });

      this.store.dispatch(DiaryPageActions.startDiaryReplay());
    } else {
      this._replayService.play();
    }
  }
  pause(): void {
    this._replayService.pauseReplay();
  }
}
