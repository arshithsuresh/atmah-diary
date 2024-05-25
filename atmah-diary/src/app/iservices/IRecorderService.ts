import { Injectable, OnDestroy } from '@angular/core';
import { AvailableKeyCodes } from '../enum/keyboard-key.enum';
import { SingleLineData } from '../models/keystroke-data.model';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Injectable()
export abstract class IRecorderService implements OnDestroy {
  private _canRecord: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _destroyed: Subject<void> = new Subject();
  canRecord$ = this._canRecord.pipe(takeUntil(this._destroyed));

  get isRecording() {
    return this._canRecord.value;
  }

  startRecording() {
    this._canRecord.next(true);
  }

  stopRecording() {
    this._canRecord.next(false);
    this._canRecord.value;
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  abstract pageData: SingleLineData;
  abstract recordAction(event: KeyboardEvent): void;
  abstract recordKey(
    keycode: AvailableKeyCodes,
    waitTime: number,
    shift: boolean,
    ctrl?: boolean
  ): [keyCharacter: string, waitTime: number];
  abstract checkKeyValid(keycode: AvailableKeyCodes, ctrl: boolean): boolean;
}
