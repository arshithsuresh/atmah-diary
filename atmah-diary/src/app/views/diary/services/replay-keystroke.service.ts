import { Injectable } from '@angular/core';
import {
  DiaryPageData,
  RecordEvent,
} from '../../../models/keystroke-data.model';
import { testData } from '../diary/testData';
import { Form, FormControl } from '@angular/forms';
import { KeyCodeMapping } from '../../../constants/keyboard-map.constatns';
import { AvailableKeyCodes } from '../../../enum/keyboard-key.enum';
import { IReplayService } from '../../../iservices/IReplayService';

@Injectable()
export class ReplayKeystrokeService extends IReplayService {
  private pageData: RecordEvent = testData.pageEvents[0];
  private control!: FormControl;

  private _currentWaitIndex: number = 0;
  private _currentCharacterIndex: number = 0;

  private fromComponent?: string = '';

  get waitTime() {
    return this.pageData.keyData[this._currentWaitIndex].w / this.speedX;
  }

  get done() {
    return this._currentCharacterIndex >= this.pageData.keyData.length;
  }

  constructor() {
    super();
  }

  setControl(control: FormControl, from?: string) {
    this.control = control;
    this.fromComponent = from;

    console.log('from', this.fromComponent);
  }

  startReplay() {
    if (!(this.control || this.pageData) || this.done) return;

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
    console.log('from', this.fromComponent);

    if (this.done) return;

    setTimeout(() => {
      this.performTyping();
    }, this.waitTime);
  }

  speedControl(newSpeed: number): number {
    return Math.min(Math.max(newSpeed, 1 / 4), 8);
  }
}
