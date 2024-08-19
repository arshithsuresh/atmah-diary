import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DiaryActions from './actions';
import { exhaustMap, map, tap } from 'rxjs';
import { IDiaryDataService } from '../../iservices/IDiaryDataService';
import { IMediaControlService } from '../../iservices/IMediaControlService';
import { IReplayService } from '../../iservices/IReplayService';
import { DEFAULT_RECORD_EVENT } from '../../constants/default-values.constants';

export const recordEventCompleted = createEffect(
  (action$ = inject(Actions), diaryDataService = inject(IDiaryDataService)) => {
    return action$.pipe(
      ofType(DiaryActions.RecordEventCompleted),
      exhaustMap(() =>
        diaryDataService.getNextRecordEvent().pipe(
          map(data => {
            if (data != DEFAULT_RECORD_EVENT)
              return DiaryActions.SetNextRecordEvent({ data: data! });
            else return DiaryActions.DiaryReplayCompleted();
          })
        )
      )
    );
  },
  { functional: true }
);

export const setNextRecordEvent = createEffect(
  (action$ = inject(Actions), replayService = inject(IReplayService)) => {
    return action$.pipe(
      ofType(DiaryActions.SetNextRecordEvent),
      tap(data => {
        replayService.setRecordEvent(data.data);
        replayService.play();
      })
    );
  },
  { functional: true, dispatch: false }
);

export const diaryReplayCompleted = createEffect(
  (
    action$ = inject(Actions),
    mediaControlService = inject(IMediaControlService),
    replayService = inject(IReplayService)
  ) => {
    return action$.pipe(
      ofType(DiaryActions.DiaryReplayCompleted),
      tap(() => {
        mediaControlService.pause();
        replayService.resetReplay();
      })
    );
  },
  { functional: true, dispatch: false }
);

export const startDiaryReplay = createEffect(
  (action$ = inject(Actions)) => {
    return action$.pipe(
      ofType(DiaryActions.StartDiaryReplay),
      map(() => DiaryActions.ResumeDiaryReplay())
    );
  },
  { functional: true, dispatch: true }
);

export const resumeDiaryReplay = createEffect(
  (action$ = inject(Actions), replayService = inject(IReplayService)) => {
    return action$.pipe(
      ofType(DiaryActions.ResumeDiaryReplay),
      tap(() => {
        replayService.play();
      })
    );
  },
  { functional: true, dispatch: false }
);
