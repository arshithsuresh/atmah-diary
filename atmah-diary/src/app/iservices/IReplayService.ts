import { Injectable, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Injectable()
export abstract class IReplayService implements OnDestroy {
  protected speedX: number = 2;
  protected _isPaused: Subject<boolean> = new Subject();
  protected isPaused: boolean = false;

  private _destroyed = new Subject<void>();
  protected destroyed$ = this._destroyed.asObservable();
  protected _isPaused$ = this._isPaused.pipe(takeUntil(this.destroyed$));

  set speed(value: number) {
    console.log(`New Speed ${this.speedControl(value)}`);
    this.speedX = this.speedControl(value);
  }

  get speed() {
    return this.speedX;
  }

  get paused() {
    return this.isPaused;
  }

  abstract startReplay(): void;
  abstract performTyping(): void;
  abstract setControl(control: FormControl): void;
  abstract speedControl(newSpeed: number): number;

  constructor() {
    this._isPaused$.subscribe(paused => {
      this.isPaused = paused;
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
    this._isPaused.next(false);
  }

  pauseReplay() {
    console.log('Paused Playing!');
    this._isPaused.next(true);
  }
  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
