import { inject, Injectable } from '@angular/core';
import {
  DiaryPageData,
  RecordEvent,
} from '../../../models/keystroke-data.model';
import { testData } from '../diary/testData';
import { Form, FormControl } from '@angular/forms';
import { KeyCodeMapping } from '../../../constants/keyboard-map.constants';
import { AvailableKeyCodes } from '../../../enum/keyboard-key.enum';
import { IReplayService } from '../../../iservices/IReplayService';
import { Subject } from 'rxjs';
import {
  DEFAULT_FORM_CONTROL,
  DEFAULT_RECORD_EVENT,
} from '../../../constants/default-values.constants';
import { KeyboardSoundsService } from './keyboard-sounds.service';
import { KeyboardSounds } from '../../../enum/key-sound.enum';

@Injectable()
export class ReplayKeystrokeService extends IReplayService {
  private _currentWaitIndex: number = 0;
  private _currentCharacterIndex: number = 0;

  private _soundService = inject(KeyboardSoundsService);

  get waitTime() {
    return this.recordEvent.keyData[this._currentWaitIndex].w / this.speedX;
  }

  get done() {
    return (
      this.hasRecordEvent &&
      this._currentCharacterIndex >= this.recordEvent.keyData.length
    );
  }

  constructor() {
    super();
    this._soundService.loadAllSounds();
  }

  setControl(control: FormControl, from?: string) {
    this.control = control;
  }

  startReplay() {
    if (!(this.hasFormControl && this.hasRecordEvent) || this.done) {
      console.warn(
        `Couldn't start replaying: has control :${this.hasFormControl}, has record event : ${this.hasRecordEvent}, finished : ${this.done}`
      );
      return;
    }

    setTimeout(() => {
      this.performTyping();
    }, this.waitTime);
  }

  resetReplay(): void {
    this.recordEvent = DEFAULT_RECORD_EVENT;
    this.control = DEFAULT_FORM_CONTROL;
    this._isPaused.next(true);
  }

  getKeyStrokeData() {}

  performTyping() {
    if (this.paused) return;

    if (this.speed < 4 && this.waitTime > 50)
      this._soundService.playSound(KeyboardSounds.NORMAL_KEY);

    const nextCharacter =
      this.recordEvent.keyData[this._currentCharacterIndex].k;
    let newValue = this.control.value as string;

    if (nextCharacter == KeyCodeMapping.get(AvailableKeyCodes.Backspace)) {
      newValue = newValue.slice(0, newValue.length - 1);
    } else {
      newValue = this.control.value + nextCharacter;
    }

    this.control.setValue(newValue);
    this._currentCharacterIndex++;
    this._currentWaitIndex++;

    if (this.done) {
      this._currentCharacterIndex = 0;
      this._currentWaitIndex = 0;
      this.recordEventCompleted();
      return;
    }

    setTimeout(() => {
      this.performTyping();
    }, this.waitTime);
  }

  speedControl(newSpeed: number): number {
    return Math.min(Math.max(newSpeed, 1 / 4), 8);
  }
}
