import { Injectable } from '@angular/core';
import { AvailableKeyCodes } from '../enum/keyboard-key.enum';
import { SingleLineData } from '../models/keystroke-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export abstract class IRecorderService {
  private _canRecord: BehaviorSubject<boolean> = new BehaviorSubject(false);
  canRecord$ = this._canRecord.asObservable();
  get canRecord() {
    return this._canRecord.value;
  }

  startRecording() {
    this._canRecord.next(true);
  }

  stopRecording() {
    this._canRecord.next(false);
    this._canRecord.value;
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
