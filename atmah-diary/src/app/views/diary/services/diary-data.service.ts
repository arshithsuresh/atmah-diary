import { inject, Injectable, OnDestroy } from '@angular/core';
import { IDiaryDataService } from '../../../iservices/IDiaryDataService';
import { DiaryPageFeature, DiaryPageState } from '../../../store/diary-feature';
import { select, Store } from '@ngrx/store';
import { defaultIfEmpty, take, takeUntil } from 'rxjs';
import { DiaryPageActions } from '../../../store/diary-feature/actions';
import { RecordEvent } from '../../../models/keystroke-data.model';

@Injectable({
  providedIn: 'root',
})
export class DiaryDataService extends IDiaryDataService implements OnDestroy {
  constructor() {
    super();
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  initialize(): void {
    this.replayService.initService();
    this.replayService.$recordEventCompleted
      .pipe(takeUntil(this.dispose$))
      .subscribe(() => {
        this.diaryStore.dispatch(DiaryPageActions.recordEventCompleted());
      });
  }

  getNextRecordEvent() {
    return this.diaryStore.pipe(
      take(1),
      select(DiaryPageFeature.selectRecordEvent)
    );
  }

  override setNextReplayRecordEvent(data: RecordEvent): void {
    this.replayService.setRecordEvent(data);
  }
}
