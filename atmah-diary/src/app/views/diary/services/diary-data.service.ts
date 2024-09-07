import { Injectable, OnDestroy } from '@angular/core';
import { IDiaryDataService } from '../../../iservices/IDiaryDataService';
import { DiaryPageFeature } from '../../../store/diary-feature';
import { select } from '@ngrx/store';
import { take, takeUntil } from 'rxjs';
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

  addRecordEvent(componentid: string): void {
    throw new Error('Method not implemented.');
  }
  saveRecordEvent(): void {
    throw new Error('Method not implemented.');
  }

  setNextReplayRecordEvent(data: RecordEvent): void {
    this.replayService.setRecordEvent(data);
  }
}
