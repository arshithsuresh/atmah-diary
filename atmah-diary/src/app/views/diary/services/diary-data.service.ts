import { Injectable, OnDestroy } from '@angular/core';
import { IDiaryDataService } from '../../../iservices/IDiaryDataService';
import { DiaryPageFeature } from '../../../store/diary-feature';
import { select } from '@ngrx/store';
import { take, takeUntil } from 'rxjs';
import { DiaryPageActions } from '../../../store/diary-feature/actions';
import { Keystroke, RecordEvent } from '../../../models/keystroke-data.model';
import { DEFAULT_COMPONENT_NAME } from '../../../constants/default-values.constants';

@Injectable({
  providedIn: 'root',
})
export class DiaryDataService extends IDiaryDataService implements OnDestroy {
  pageData: RecordEvent = { keyData: [], componentId: DEFAULT_COMPONENT_NAME };

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

    this.recorderService.newRecordEvent$
      .pipe(takeUntil(this.dispose$))
      .subscribe(({ component, key }) => {
        this.addRecordEvent(component, key);
      });
  }

  getNextRecordEvent() {
    return this.diaryStore.pipe(
      take(1),
      select(DiaryPageFeature.selectRecordEvent)
    );
  }

  createNewPageData(componentId: string): void {
    this.pageData = { keyData: [], componentId: componentId };
  }

  addRecordEvent(componentId: string, keyData: Keystroke): void {
    if (this.pageData.componentId != componentId) {
      this.saveRecordEvent();
      this.createNewPageData(componentId);
    }

    this.pageData.keyData.push(keyData);
  }

  saveRecordEvent(): void {
    if (this.pageData.componentId == DEFAULT_COMPONENT_NAME) {
      return;
    }

    this.diaryStore.dispatch(
      DiaryPageActions.recordEventAction({ data: this.pageData })
    );
  }
}
