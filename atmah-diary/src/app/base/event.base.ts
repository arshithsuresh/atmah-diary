import { RECORDING_EVENTS } from '../enum/event-type.enum';

export abstract class RecordEventBase {
  abstract eventType: RECORDING_EVENTS;
  nextEvent?: RecordEventBase;

  abstract performEvent(): void;
}
