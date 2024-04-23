import { Injectable } from '@angular/core';
import { IReplayService } from './IReplayService';

@Injectable()
export abstract class IMediaControlService {
  get currentSpeed(): number {
    return this._replayServiceBase.speed;
  }
  get isPaused(): boolean {
    return this._replayServiceBase.isPaused;
  }

  constructor(private _replayServiceBase: IReplayService) {}

  abstract play(): void;
  abstract pause(): void;

  fastForward() {
    this._replayServiceBase.fastForward();
  }

  fastBackward() {
    this._replayServiceBase.fastBackward();
  }
}
