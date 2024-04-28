import { Injectable } from '@angular/core';
import { SingleLineData } from '../../../models/keystroke-data.model';
import { testData } from '../diary/testData';
import { FormControl } from '@angular/forms';
import { KeyCodeMapping } from '../../../constants/keyboard-map.constatns';
import { AvailableKeyCodes } from '../../../enum/keyboard-key.enum';
import { IReplayService } from '../../../iservices/IReplayService';

@Injectable()
export class ReplayKeystrokeService extends IReplayService {
  private pageData: SingleLineData = testData;
  private control!: FormControl;

  private _currentWaitIndex: number = 0;
  private _currentCharacterIndex: number = 0;

  get waitTime() {
    return this.pageData.keyData[this._currentWaitIndex].w / this.speedX;
  }

  get done() {
    return this._currentCharacterIndex >= this.pageData.keyData.length;
  }

  constructor() {
    super();
  }

  setControl(control: FormControl) {
    this.control = control;
  }

  startReplay() {
    if (!(this.control || this.pageData) || this.done) return;

    console.log('Starting replaying keystrokes');

    setTimeout(() => {
      this.performTyping();
    }, this.waitTime);
  }

  getKeyStrokeData() {}

  performTyping() {
    if (this.paused) return;

    const nextCharacter = this.pageData.keyData[this._currentCharacterIndex].k;
    let newValue = this.control.value as string;

    if (nextCharacter == KeyCodeMapping.get(AvailableKeyCodes.Backspace)) {
      newValue = newValue.slice(0, newValue.length - 1);
    } else {
      newValue = this.control.value + nextCharacter;
    }

    this.control.setValue(newValue);
    this._currentCharacterIndex++;
    this._currentWaitIndex++;

    if (this.done) return;

    setTimeout(() => {
      this.performTyping();
    }, this.waitTime);
  }

  speedControl(newSpeed: number): number {
    return Math.min(Math.max(newSpeed, 1 / 4), 8);
  }
}
