import { createAction, props } from '@ngrx/store';
import { RecordEvent } from '../../models/keystroke-data.model';

export const RecordEventAction = createAction(
  '[Diary Actions] Record Event',
  props<{ data: RecordEvent }>()
);

export const RegisterRecordableComponent = createAction(
  '[Diary Actions] Register Recordable Component',
  props<{
    componentId: string;
    component: boolean;
  }>()
);

export const FocusRecordableComponent = createAction(
  '[Diary Actions] Focus Recordable Component',
  props<{ componentId: string }>()
);

export const RecordEventCompleted = createAction(
  '[Diary Actions] Record Event Completed'
);

export const SetNextRecordEvent = createAction(
  '[Diary Actions] Set Next Record Event',
  props<{ data: RecordEvent }>()
);

export const StartDiaryReplay = createAction(
  '[Diary Actions] Start Diary Replay'
);

export const ResumeDiaryReplay = createAction(
  '[Diary Actions] Resume Diary Replay'
);

export const PauseDiaryReplay = createAction(
  '[Diary Actions] Pause Diary Replay'
);

export const DiaryReplayCompleted = createAction(
  '[Diary Actions] Diary Replay Completed'
);
