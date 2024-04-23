import { Injectable } from '@angular/core';
import { AvailableKeyCodes } from '../enum/keyboard-key.enum';

@Injectable()
export abstract class IRecorderService {
  abstract recordKey(
    keycode: AvailableKeyCodes,
    waitTime: number,
    shift: boolean,
    ctrl?: boolean
  ): [keyCharacter: string, waitTime: number];
  abstract checkKeyValid(keycode: AvailableKeyCodes, ctrl: boolean): boolean;
}
