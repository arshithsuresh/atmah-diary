import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RecordEvent } from '../../models/keystroke-data.model';

export const DiaryPageActions = createActionGroup({
  source: 'Diary Actions',
  events: {
    RegisterRecordableComponent: props<{
      componentId: string;
      component: boolean;
    }>(),

    RecordEventAction: props<{ data: RecordEvent }>(),

    SetFocusRecordableComponent: props<{ componentId: string }>(),

    RecordEventCompleted: emptyProps(),

    SetNextRecordEvent: props<{ data: RecordEvent }>(),

    StartDiaryReplay: emptyProps(),

    ResumeDiaryReplay: emptyProps(),

    PauseDiaryReplay: emptyProps(),

    StartRecording: emptyProps(),

    StopRecording: emptyProps(),

    DiaryReplayCompleted: emptyProps(),
  },
});
