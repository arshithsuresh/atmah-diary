import { createAction, props } from '@ngrx/store';
import { RecordEvent } from '../../models/keystroke-data.model';
import { RecordableComponent } from '../../base/RecordableComponent.base';
import { Type } from '@angular/core';

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
