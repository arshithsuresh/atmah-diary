import { Injectable } from '@angular/core';
import { SingleLineData } from '../../../models/keystroke-data.model';
import { testData } from '../diary/testData';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReplayKeystrokeService {
  private isPaused: Subject<boolean> = new Subject();
  private pageData: SingleLineData = testData;
  private control!: FormControl;

  private currentWaitIndex: number = 0;
  private currentCharacterIndex: number = 0;

  constructor() {
    this.isPaused.pipe().subscribe(paused => {
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
      this.currentWaitIndex++;
      this.performTyping();
    }, this.pageData.keyData[this.currentWaitIndex].w);
  }

  play() {
    this.isPaused.next(false);
  }

  pauseReplay() {
    this.isPaused.next(true);
  }

  getKeyStrokeData() {}

  performTyping() {
    setTimeout(() => {
      console.log(
        `Waited : ${this.pageData.keyData[this.currentWaitIndex].w} to type ${
          this.pageData.keyData[this.currentCharacterIndex].k
        }`
      );
      this.control.setValue(
        this.control.value + this.pageData.keyData[this.currentCharacterIndex].k
      );
      this.currentWaitIndex++;
      this.currentCharacterIndex++;

      this.performTyping();
    }, this.pageData.keyData[this.currentWaitIndex].w);
  }
}
