import { Injectable, OnDestroy } from '@angular/core';
import { AvailableKeyCodes } from '../enum/keyboard-key.enum';
import { Keystroke, RecordEvent } from '../models/keystroke-data.model';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Injectable()
export abstract class IRecorderService implements OnDestroy {
  private _canRecord: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _destroyed: Subject<void> = new Subject();

  private _newRecordEvent: Subject<{ component: string; key: Keystroke }> =
    new Subject();

  newRecordEvent$ = this._newRecordEvent.asObservable();

  canRecord$ = this._canRecord.pipe(takeUntil(this._destroyed));

  get isRecording() {
    return this._canRecord.value;
  }

  nextRecordEvent(component: string, keycode: string, waitTime: number) {
    this._newRecordEvent.next({
      component: component,
      key: { k: keycode, w: waitTime },
    });
  }

  startRecording() {
    this._canRecord.next(true);
  }

  stopRecording() {
    this._canRecord.next(false);
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  abstract pageData: RecordEvent;
  abstract recordAction(event: KeyboardEvent, componentId: string): void;
  abstract recordKey(
    keycode: AvailableKeyCodes,
    waitTime: number,
    shift: boolean,
    ctrl?: boolean
  ): [keyCharacter: string, waitTime: number];
  abstract checkKeyValid(keycode: AvailableKeyCodes, ctrl: boolean): boolean;
}
