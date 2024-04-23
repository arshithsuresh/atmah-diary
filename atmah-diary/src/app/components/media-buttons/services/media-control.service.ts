import { Injectable } from '@angular/core';
import { IMediaControlService } from '../../../iservices/IMediaControlService';
import { IReplayService } from '../../../iservices/IReplayService';

@Injectable()
export class MediaControlService extends IMediaControlService {
  constructor(private _replayService: IReplayService) {
    super(_replayService);
  }

  override play(): void {
    this._replayService.play();
  }
  override pause(): void {
    this._replayService.pauseReplay();
  }
}
