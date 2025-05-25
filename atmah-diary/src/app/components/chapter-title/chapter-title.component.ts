import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { KeypressRecordableComponent } from '../../base/RecordableComponent.base';
import { ReactiveFormsModule } from '@angular/forms';
import { DiaryPageState } from '../../store/diary-feature';

@Component({
    selector: 'atmah-chapter-title',
    templateUrl: './chapter-title.component.html',
    styleUrl: './chapter-title.component.scss',
    imports: [ReactiveFormsModule]
})
export class ChapterTitleComponent
  extends KeypressRecordableComponent<DiaryPageState>
  implements AfterViewInit
{
  @ViewChild('titleArea') titleTextArea!: ElementRef;

  constructor(private renderer: Renderer2) {
    super();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  onFocus(): void {
    this.componentSelected();
  }
}
