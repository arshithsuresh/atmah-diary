import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { KeypressRecordableComponent } from '../../base/RecordableComponent.base';

@Component({
  selector: 'atmah-chapter-title',
  standalone: true,
  templateUrl: './chapter-title.component.html',
  styleUrl: './chapter-title.component.scss',
})
export class ChapterTitleComponent
  extends KeypressRecordableComponent
  implements AfterViewInit
{
  override onFocus(): void {
    this.componentSelected();
  }

  @ViewChild('titleArea') titleTextArea!: ElementRef;

  constructor(private renderer: Renderer2) {
    super();
  }
  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }
}
