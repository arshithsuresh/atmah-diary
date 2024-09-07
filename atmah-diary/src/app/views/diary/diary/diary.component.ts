import { AfterViewInit, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { KeypressRecordableComponent } from '../../../base/RecordableComponent.base';
import { DiaryPageState } from '../../../store/diary-feature';

@Component({
  selector: 'atmah-diary',
  standalone: true,
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss',
  imports: [ReactiveFormsModule],
})
export class DiaryComponent
  extends KeypressRecordableComponent<DiaryPageState>
  implements AfterViewInit
{
  constructor() {
    super();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  onFocus(): void {
    this.componentSelected();
  }
}
