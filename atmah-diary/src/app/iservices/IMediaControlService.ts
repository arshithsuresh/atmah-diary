import { inject, Injectable } from '@angular/core';
import { IReplayService } from './IReplayService';
import { IRecorderService } from './IRecorderService';
import { SharedActionsService } from '../views/diary/services/shared-actions.service';

@Injectable()
export abstract class IMediaControlService {
  private _replayCompleted: boolean = false;

  get currentSpeed(): number {
    return this._replayService.speed;
  }
  get isPaused(): boolean {
    return this._replayService.paused;
  }

  get isRecording(): boolean {
    return this._recorderService.isRecording;
  }

  get isCompleted(): boolean {
    return this._replayCompleted;
  }

  protected _replayService: IReplayService = inject(IReplayService);
  protected _recorderService: IRecorderService = inject(IRecorderService);
  protected _sharedAction: SharedActionsService = inject(SharedActionsService);

  constructor() {
    console.log('Initiated Media Service');
  }

  abstract play(): void;
  abstract pause(): void;

  startRecording() {
    this._recorderService.startRecording();
  }

  stopRecording() {
    this._recorderService.stopRecording();
  }

  fastForward() {
    this._replayService.fastForward();
  }

  fastBackward() {
    this._replayService.fastBackward();
  }

  replay() {
    this._sharedAction.resetAllComponents();
    this.play();
  }

  restartedReplay() {
    this._replayCompleted = false;
  }
  replayCompleted() {
    this._replayCompleted = true;
  }
}
