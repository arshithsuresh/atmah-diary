import { Component, OnInit } from '@angular/core';
import { FullPageContainerComponent } from '../../components/full-page-container/full-page-container.component';
import { DiaryComponent } from './diary/diary.component';
import { ChapterTitleComponent } from '../../components/chapter-title/chapter-title.component';
import { ActivatedRoute } from '@angular/router';
import { RecordingIndicatorComponent } from '../../components/recording-indicator/recording-indicator.component';
import { MediaButtonsModule } from '../../components/media-buttons/media-buttons.module';

@Component({
  selector: 'view-diary',
  standalone: true,
  imports: [
    FullPageContainerComponent,
    DiaryComponent,
    ChapterTitleComponent,
    MediaButtonsModule,
    RecordingIndicatorComponent,
  ],

  templateUrl: './diary-view.component.html',
  styleUrl: './diary-view.component.scss',
})
export class DiaryViewComponent implements OnInit {
  constructor(private routeData: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('Viewing :: ', this.routeData.snapshot.routeConfig?.path);
  }
}
