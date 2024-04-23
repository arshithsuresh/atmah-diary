import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable()
export abstract class IReplayService {
  protected speedX: number = 2;
  protected isPaused$: Subject<boolean> = new Subject();
  protected _isPaused: boolean = false;

  set speed(value: number) {
    console.log(`New Speed ${this.speedControl(value)}`);
    this.speedX = this.speedControl(value);
  }

  get speed() {
    return this.speedX;
  }

  get isPaused() {
    return this._isPaused;
  }

  abstract startReplay(): void;
  abstract performTyping(): void;
  abstract setControl(control: FormControl): void;
  abstract speedControl(newSpeed: number): number;

  constructor() {
    this.isPaused$.pipe().subscribe(paused => {
      this._isPaused = paused;
      if (!paused) {
        this.startReplay();
      }
    });
  }

  fastForward() {
    this.speed *= 2;
  }
  fastBackward() {
    this.speed /= 2;
  }

  play() {
    console.log('Resumed Playing!');
    this.isPaused$.next(false);
  }

  pauseReplay() {
    console.log('Paused Playing!');
    this.isPaused$.next(true);
  }
}
