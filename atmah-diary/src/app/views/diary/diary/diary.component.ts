import { AfterViewInit, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { KeypressRecordableComponent } from '../../../base/RecordableComponent.base';

@Component({
  selector: 'atmah-diary',
  standalone: true,
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss',
  imports: [ReactiveFormsModule],
})
export class DiaryComponent
  extends KeypressRecordableComponent
  implements AfterViewInit
{
  constructor() {
    super();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override onFocus(): void {
    this.componentSelected();
  }
}
