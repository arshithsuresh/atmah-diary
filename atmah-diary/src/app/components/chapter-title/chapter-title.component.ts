import { Component } from '@angular/core';
import { MediaButtonsModule } from '../media-buttons/media-buttons.module';
import { RecordingIndicatorComponent } from '../recording-indicator/recording-indicator.component';
import { RecordableComponent } from '../../base/RecordableComponent.base';

@Component({
  selector: 'atmah-chapter-title',
  standalone: true,
  imports: [MediaButtonsModule, RecordingIndicatorComponent],
  templateUrl: './chapter-title.component.html',
  styleUrl: './chapter-title.component.scss',
})
export class ChapterTitleComponent extends RecordableComponent {}
