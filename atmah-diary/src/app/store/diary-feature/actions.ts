import { createAction, props } from '@ngrx/store';
import { RecordEvent } from '../../models/keystroke-data.model';

export const RecordEventAction = createAction(
  '[Diary Actions] Record Event',
  props<{ data: RecordEvent }>()
);
