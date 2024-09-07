import { inject, Injectable } from '@angular/core';
import { IReplayService } from './IReplayService';
import { IRecorderService } from './IRecorderService';
import { Observable, Subject } from 'rxjs';
import { Keystroke, RecordEvent } from '../models/keystroke-data.model';
import { Store } from '@ngrx/store';
import { DiaryPageState } from '../store/diary-feature';

@Injectable()
export abstract class IDiaryDataService {
  private _dispose = new Subject<void>();

  protected replayService = inject(IReplayService);
  protected recorderService = inject(IRecorderService);
  protected diaryStore = inject(Store<DiaryPageState>);

  protected dispose$ = this._dispose.asObservable();

  dispose(): void {
    this._dispose.next();
  }

  abstract initialize(): void;
  abstract getNextRecordEvent(): Observable<RecordEvent | undefined>;
  abstract setNextReplayRecordEvent(data: RecordEvent): void;

  abstract addRecordEvent(componentid: string, key: Keystroke): void;
  abstract saveRecordEvent(): void;
  abstract createNewPageData(componentid: string): void;
}
