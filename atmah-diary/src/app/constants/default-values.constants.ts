import { FormControl } from '@angular/forms';
import { RecordEvent } from '../models/keystroke-data.model';

export const DEFAULT_RECORD_EVENT: RecordEvent = {
  componentId: 'default-null-value',
  keyData: [],
};

export const DEFAULT_FORM_CONTROL: FormControl = new FormControl(
  'default-null-form-control'
);
