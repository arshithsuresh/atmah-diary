import { Injectable } from '@angular/core';
import { SingleLineData } from '../../../models/keystroke-data.model';
import { testData } from '../diary/testData';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { KeyCodeMapping } from '../../../constants/keyboard-map.constatns';
import { AvailableKeyCodes } from '../../../enum/keyboard-key.enum';
import { IReplayService } from '../../../iservices/IReplayService';

@Injectable()
export class ReplayKeystrokeService implements IReplayService {
  private isPaused$: Subject<boolean> = new Subject();
  private pageData: SingleLineData = testData;
  private control!: FormControl;

  private speedX: number = 2;

  private _currentWaitIndex: number = 0;
  private _currentCharacterIndex: number = 0;
  private _isPaused: boolean = false;

  set speed(value: number) {
    this.speedX = value;
  }

  get speed() {
    return this.speedX;
  }

  get waitTime() {
    return this.pageData.keyData[this._currentWaitIndex++].w / this.speedX;
  }

  get done() {
    return this._currentCharacterIndex >= this.pageData.keyData.length;
  }
  constructor() {
    this.isPaused$.pipe().subscribe(paused => {
      this._isPaused = paused;
      if (!paused) {
        this.startReplay();
      }
    });
  }

  setControl(control: FormControl) {
    this.control = control;
  }

  startReplay() {
    if (!(this.control || this.pageData)) return;

    console.log('Starting replaying keystrokes');

    setTimeout(() => {
      this.performTyping();
    }, this.waitTime);
  }

  play() {
    this.isPaused$.next(false);
  }

  pauseReplay() {
    this.isPaused$.next(true);
  }

  getKeyStrokeData() {}

  performTyping() {
    if (this._isPaused) return;

    const nextCharacter = this.pageData.keyData[this._currentCharacterIndex].k;
    let newValue = this.control.value as string;

    if (nextCharacter == KeyCodeMapping.get(AvailableKeyCodes.Backspace)) {
      newValue = newValue.slice(0, newValue.length - 1);
    } else {
      newValue = this.control.value + nextCharacter;
    }

    this.control.setValue(newValue);
    this._currentCharacterIndex++;

    if (this.done) return;

    setTimeout(() => {
      this.performTyping();
    }, this.waitTime);
  }
}
