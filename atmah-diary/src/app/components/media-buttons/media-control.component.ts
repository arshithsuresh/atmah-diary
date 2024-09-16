import { Component, Inject, Optional } from '@angular/core';
import { IMediaControlService } from '../../iservices/IMediaControlService';
import { CAN_RECORD_TOKEN } from '../../tokens/can-record.token';

@Component({
  selector: 'atmah-media-control',
  templateUrl: './media-control.component.html',
  styleUrl: './media-control.component.scss',
})
export class MediaControlComponent {
  get isPaused() {
    return this._mediaControl.isPaused;
  }

  get isRecording() {
    return this._mediaControl.isRecording;
  }

  get speed() {
    return this._mediaControl.currentSpeed;
  }

  get canRecord() {
    return this._isInEditMode;
  }

  isCompleted() {
    return this._mediaControl.isCompleted;
  }

  constructor(
    private _mediaControl: IMediaControlService,

    @Optional() @Inject(CAN_RECORD_TOKEN) private _isInEditMode: boolean = false
  ) {}

  onPlayClick() {
    if (!this.isPaused) return;

    this._mediaControl.play();
  }

  onPauseClick() {
    if (this.isPaused) return;

    this._mediaControl.pause();
  }

  onFForwardClick() {
    this._mediaControl.fastForward();
  }

  onFBackwardClick() {
    this._mediaControl.fastBackward();
  }

  onStartRecording() {
    if (!this.canRecord && !this.isPaused) return;

    this._mediaControl.startRecording();
  }

  onStopRecording() {
    this._mediaControl.stopRecording();
  }

  onReplayClick() {
    if (this.isRecording) return;

    this._mediaControl.replay();
  }
}
