import { Component } from '@angular/core';
import { IMediaControlService } from '../../iservices/IMediaControlService';

@Component({
  selector: 'atmah-media-control',
  templateUrl: './media-control.component.html',
  styleUrl: './media-control.component.scss',
})
export class MediaControlComponent {
  get isPaused() {
    return this._mediaControl.isPaused;
  }
  get speed() {
    return this._mediaControl.currentSpeed;
  }
  constructor(private _mediaControl: IMediaControlService) {}

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
}
