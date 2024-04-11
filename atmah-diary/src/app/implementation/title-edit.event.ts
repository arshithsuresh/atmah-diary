import { RecordEventBase } from '../base/event.base';
import { RECORDING_EVENTS } from '../enum/event-type.enum';

export class TitleEditEvent extends RecordEventBase {
  eventType = RECORDING_EVENTS.TITLE_EDIT;

  override performEvent(): void {
    throw new Error('Method not implemented.');
  }
}
