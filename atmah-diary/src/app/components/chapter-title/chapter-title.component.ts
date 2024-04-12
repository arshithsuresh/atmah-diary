import { Component } from '@angular/core';
import { MediaButtonsModule } from '../media-buttons/media-buttons.module';

@Component({
  selector: 'atmah-chapter-title',
  standalone: true,
  imports: [MediaButtonsModule],
  templateUrl: './chapter-title.component.html',
  styleUrl: './chapter-title.component.scss',
})
export class ChapterTitleComponent {}
