import { Injectable } from '@angular/core';
import { KeyCode } from '../../../enum/keyboard-key.enum';
import {
  KeyCodeMapping,
  SpecialKeyMap,
} from '../../../constants/keyboard-map.constatns';
import { SingleLineData } from '../../../models/keystroke-data.model';

@Injectable({
  providedIn: 'root',
})
export class KeystrokeRecorderService {
  pageData: SingleLineData = { keyData: [], nextData: null };

  constructor() {}

  recordKey(
    key: KeyCode,
    waitTime: number,
    shift: boolean = false,
    ctrl: boolean = false
  ): [keyCharacter: string, waitTime: number] {
    let keyCharacter = KeyCodeMapping.get(key)!;

    if (shift) {
      keyCharacter = keyCharacter?.toUpperCase();
    }

    this.pageData.keyData.push({
      k: keyCharacter,
      w: waitTime,
    });

    return [keyCharacter, waitTime];
  }
}
