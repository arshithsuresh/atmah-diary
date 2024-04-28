import { Injectable } from '@angular/core';
import { IReplayService } from './IReplayService';
import { IRecorderService } from './IRecorderService';

@Injectable()
export abstract class IMediaControlService {
  get currentSpeed(): number {
    return this._replayServiceBase.speed;
  }
  get isPaused(): boolean {
    return this._replayServiceBase.paused;
  }

  constructor(
    private _replayServiceBase: IReplayService,
    private _recorderServiceBase: IRecorderService
  ) {}

  abstract play(): void;
  abstract pause(): void;

  startRecording() {
    this._recorderServiceBase.startRecording();
  }

  stopRecording() {
    this._recorderServiceBase.stopRecording();
  }

  fastForward() {
    this._replayServiceBase.fastForward();
  }

  fastBackward() {
    this._replayServiceBase.fastBackward();
  }
}
