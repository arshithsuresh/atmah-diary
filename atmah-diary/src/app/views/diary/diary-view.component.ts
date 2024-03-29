import { Component } from '@angular/core';
import { FullPageContainerComponent } from '../../components/full-page-container/full-page-container.component';
import { DiaryComponent } from './diary/diary.component';

@Component({
  selector: 'view-diary',
  standalone: true,
  imports: [FullPageContainerComponent, DiaryComponent],
  templateUrl: './diary-view.component.html',
  styleUrl: './diary-view.component.scss',
})
export class DiaryViewComponent {}
