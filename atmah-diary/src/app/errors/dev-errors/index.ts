import { DevelopmentError } from './dev-error.base';

export const DUPLICATE_RECORDER_ID = () =>
  new DevelopmentError('Recorder component id already in use.');

export const NO_RECORDER_COMPONENT = (recorderId: string) =>
  new DevelopmentError(`No Recorder element specified for ${recorderId}`);

export const NO_RECORDER_FORM_CONTROL = (recorderId: string) =>
  new DevelopmentError(`No form control specified for ${recorderId}`);
