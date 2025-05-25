import { Component, HostBinding } from '@angular/core';
import { IMediaControlService } from '../../iservices/IMediaControlService';

@Component({
    selector: 'atmah-recording-indicator',
    imports: [],
    templateUrl: './recording-indicator.component.html',
    styleUrl: './recording-indicator.component.scss'
})
export class RecordingIndicatorComponent {
  @HostBinding('class.recording') get recording() {
    return this.mediaController.isRecording;
  }
  @HostBinding('class.not-recording') get notrecording() {
    return !this.mediaController.isRecording;
  }

  constructor(private mediaController: IMediaControlService) {}
}
