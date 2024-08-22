import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DiaryPageActions } from './actions';
import { exhaustMap, map, tap } from 'rxjs';
import { IDiaryDataService } from '../../iservices/IDiaryDataService';
import { IMediaControlService } from '../../iservices/IMediaControlService';
import { IReplayService } from '../../iservices/IReplayService';
import { DEFAULT_RECORD_EVENT } from '../../constants/default-values.constants';

export const recordEventCompleted = createEffect(
  (action$ = inject(Actions), diaryDataService = inject(IDiaryDataService)) => {
    return action$.pipe(
      ofType(DiaryPageActions.recordEventCompleted),
      exhaustMap(() =>
        diaryDataService.getNextRecordEvent().pipe(
          map(data => {
            if (data != DEFAULT_RECORD_EVENT)
              return DiaryPageActions.setNextRecordEvent({ data: data! });
            else return DiaryPageActions.diaryReplayCompleted();
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
      ofType(DiaryPageActions.setNextRecordEvent),
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
      ofType(DiaryPageActions.diaryReplayCompleted),
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
      ofType(DiaryPageActions.startDiaryReplay),
      map(() => DiaryPageActions.resumeDiaryReplay())
    );
  },
  { functional: true, dispatch: true }
);

export const resumeDiaryReplay = createEffect(
  (action$ = inject(Actions), replayService = inject(IReplayService)) => {
    return action$.pipe(
      ofType(DiaryPageActions.resumeDiaryReplay),
      tap(() => {
        replayService.play();
      })
    );
  },
  { functional: true, dispatch: false }
);
