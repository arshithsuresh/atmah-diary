import { inject, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { KeyCodeMapping } from '../../../constants/keyboard-map.constants';
import { AvailableKeyCodes } from '../../../enum/keyboard-key.enum';
import { IReplayService } from '../../../iservices/IReplayService';
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
  }

  initService() {
    this._soundService.initService();
  }

  setControl(control: FormControl, from?: string) {
    this.control = control;
  }

  startReplay() {
    if (!(this.hasFormControl && this.hasRecordEvent) || this.done) {
      this.pauseReplay();

      if (!this.done && !this.hasRecordEvent) {
        console.error('Something is not right');
      }
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

  playKeystrokeSound(character: string) {
    if (this.speed >= 4 || this.waitTime <= 50) return;

    switch (character) {
      case KeyCodeMapping.get(AvailableKeyCodes.Backspace):
        this._soundService.playSound(KeyboardSounds.BACKSPACE_KEY);
        break;
      case KeyCodeMapping.get(AvailableKeyCodes.Enter):
        this._soundService.playSound(KeyboardSounds.ENTER_KEY);
        break;

      default:
        this._soundService.playSound(KeyboardSounds.NORMAL_KEY);
        break;
    }
  }
  performTyping() {
    if (this.paused) return;

    const nextCharacter =
      this.recordEvent.keyData[this._currentCharacterIndex].k;

    let newValue = this.control.value as string;

    this.playKeystrokeSound(nextCharacter);

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
