import { Component, EventEmitter, Output } from '@angular/core';
import { MediaButtonBase } from '../media-button.base';

@Component({
  selector: 'atmah-record-button',
  templateUrl: './record-button.component.html',
  styleUrl: './record-button.component.scss',
})
export class RecordButtonComponent extends MediaButtonBase {
  @Output() onRecord: EventEmitter<void> = new EventEmitter();
  @Output() onStop: EventEmitter<void> = new EventEmitter();

  recording: boolean = false;
  recordingColor: string = '#B91F1F';
  nonRecordingColor: string = '#000000';

  get buttonColor() {
    return this.recording ? this.recordingColor : this.nonRecordingColor;
  }

  override onClick() {
    if (this.recording) {
      this.onStop.emit();
    } else {
      this.onRecord.emit();
    }

    this.recording = !this.recording;
  }
}
