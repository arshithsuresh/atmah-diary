import { Injectable } from '@angular/core';
import { AvailableKeyCodes, KeyCode } from '../../../enum/keyboard-key.enum';
import {
  KeyCodeMapping,
  SpecialKeyMap,
} from '../../../constants/keyboard-map.constatns';
import { SingleLineData } from '../../../models/keystroke-data.model';
import { isCharacter } from '../../../utils/stringFunctions';

@Injectable({
  providedIn: 'root',
})
export class KeystrokeRecorderService {
  pageData: SingleLineData = { keyData: [], nextData: null };

  constructor() {}

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

  checkKeyValid(keycode: AvailableKeyCodes, ctrl: boolean = false) {
    const isAvailableKey = Object.values(AvailableKeyCodes).includes(
      keycode as AvailableKeyCodes
    );

    const isValidKey = isAvailableKey && !ctrl;
    console.log('Is valid ', isValidKey);
    return isValidKey;
  }
}
