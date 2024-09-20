import { Injectable, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { RecordEvent } from '../models/keystroke-data.model';
import {
  DEFAULT_FORM_CONTROL,
  DEFAULT_RECORD_EVENT,
} from '../constants/default-values.constants';

@Injectable()
export abstract class IReplayService implements OnDestroy {
  protected speedX: number = 1;
  protected _isPaused: Subject<boolean> = new Subject();
  protected isPaused: boolean = true;
  protected recordEvent: RecordEvent = DEFAULT_RECORD_EVENT;
  protected control: FormControl = DEFAULT_FORM_CONTROL;

  private _destroyed = new Subject<void>();
  private _recordEventCompleted: Subject<void> = new Subject();

  protected destroyed$ = this._destroyed.asObservable();
  protected _isPaused$ = this._isPaused.pipe(takeUntil(this.destroyed$));

  set speed(value: number) {
    this.speedX = this.speedControl(value);
  }

  get $recordEventCompleted() {
    return this._recordEventCompleted.asObservable();
  }

  get speed() {
    return this.speedX;
  }

  get paused() {
    return this.isPaused;
  }

  get hasRecordEvent() {
    return this.recordEvent != DEFAULT_RECORD_EVENT;
  }

  get hasFormControl() {
    return this.control != DEFAULT_FORM_CONTROL;
  }

  abstract initService(): void;
  abstract startReplay(): void;
  abstract performTyping(): void;
  abstract setControl(control: FormControl, from?: string): void;
  abstract speedControl(newSpeed: number): number;
  abstract resetReplay(): void;

  constructor() {
    this._isPaused$.subscribe(paused => {
      this.isPaused = paused;
      if (!paused) {
        this.startReplay();
      }
    });
  }

  recordEventCompleted() {
    this._recordEventCompleted.next();
  }

  setRecordEvent(event: RecordEvent, startImmediately: boolean = true) {
    this.recordEvent = event;
    if (startImmediately) {
      this.startReplay();
    }
  }

  fastForward() {
    this.speed *= 2;
  }
  fastBackward() {
    this.speed /= 2;
  }

  play() {
    this._isPaused.next(false);
  }

  pauseReplay() {
    this._isPaused.next(true);
  }
  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
