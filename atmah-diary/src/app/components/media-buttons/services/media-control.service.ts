import { Injectable } from '@angular/core';
import { IMediaControlService } from '../../../iservices/IMediaControlService';
import { IReplayService } from '../../../iservices/IReplayService';
import { IRecorderService } from '../../../iservices/IRecorderService';

@Injectable()
export class MediaControlService extends IMediaControlService {
  constructor(
    private _replayService: IReplayService,
    private _recorderService: IRecorderService
  ) {
    super(_replayService, _recorderService);
  }

  override play(): void {
    this._replayService.play();
  }
  override pause(): void {
    this._replayService.pauseReplay();
  }
}
