import { inject, Injectable } from '@angular/core';
import { IReplayService } from './IReplayService';
import { IRecorderService } from './IRecorderService';

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

  get isCompleted() {
    return this._replayCompleted;
  }

  protected _replayService: IReplayService = inject(IReplayService);
  protected _recorderService: IRecorderService = inject(IRecorderService);

  constructor() {}

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

  replayCompleted() {
    this._replayCompleted = true;
  }
}
