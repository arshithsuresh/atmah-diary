import { Injectable } from '@angular/core';
import { AvailableKeyCodes } from '../../../enum/keyboard-key.enum';
import { KeyCodeMapping } from '../../../constants/keyboard-map.constatns';
import { RecordEvent } from '../../../models/keystroke-data.model';
import { isCharacter } from '../../../utils/stringFunctions';
import { IRecorderService } from '../../../iservices/IRecorderService';

@Injectable()
export class KeystrokeRecorderService extends IRecorderService {
  private _lastActionTime: number = -1;

  pageData: RecordEvent = { keyData: [], componentId: 'null' };

  constructor() {
    super();
    this.canRecord$.subscribe(canRecord => {
      if (canRecord) {
        this._lastActionTime = Date.now();
      }
    });
  }

  recordAction(event: KeyboardEvent) {
    if (!this.isRecording) return;

    const currentTime = Date.now();
    const keyStrokeDiff = Math.max(
      10,
      Math.min(currentTime - this._lastActionTime, 5000)
    );

    let [keyCharacter, waitTime] = this.recordKey(
      event.code as AvailableKeyCodes,
      keyStrokeDiff,
      event.shiftKey
    );

    this.pageData.keyData.push({
      k: keyCharacter,
      w: waitTime,
    });

    this._lastActionTime = Date.now();
  }

  recordKey(
    keycode: AvailableKeyCodes,
    waitTime: number,
    shift: boolean = false,
    ctrl: boolean = false
  ): [keyCharacter: string, waitTime: number] {
    let keyCharacter = KeyCodeMapping.get(keycode)!;

    if (shift && isCharacter(keyCharacter)) {
      keyCharacter = keyCharacter?.toUpperCase();
    }

    this.pageData.keyData.push({
      k: keyCharacter,
      w: waitTime,
    });

    return [keyCharacter, waitTime];
  }

  checkKeyValid(keycode: AvailableKeyCodes, ctrl: boolean = false): boolean {
    const isAvailableKey = Object.values(AvailableKeyCodes).includes(
      keycode as AvailableKeyCodes
    );

    const isValidKey = isAvailableKey && !ctrl;

    return isValidKey;
  }
}
