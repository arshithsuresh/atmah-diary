import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { SingleLineData } from '../../../models/keystroke-data.model';
import { AvailableKeyCodes } from '../../../enum/keyboard-key.enum';
import { IReplayService } from '../../../iservices/IReplayService';
import { IRecorderService } from '../../../iservices/IRecorderService';

@Component({
  selector: 'atmah-diary',
  standalone: true,
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss',
  imports: [ReactiveFormsModule],
})
export class DiaryComponent implements OnInit, AfterViewInit {
  @ViewChild('diaryTextarea') diaryTextarea!: ElementRef;

  diaryControl: FormControl = new FormControl('');

  constructor(
    private keyStrokeRecorder: IRecorderService,
    private keyReplay: IReplayService
  ) {}

  ngAfterViewInit(): void {
    this.performTyping();
  }

  ngOnInit(): void {
    this.diaryControl.valueChanges
      .pipe(map((value: string) => value.at(-1)))
      .subscribe(key => {});
  }

  performTyping() {
    this.keyReplay.setControl(this.diaryControl);
    this.keyReplay.play();
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.canRecordKeys(event)) {
      event.preventDefault();
      return;
    }

    this.keyStrokeRecorder.recordAction(event);

    if (event.code == 'Enter') {
      console.log(this.keyStrokeRecorder.pageData.keyData);
    }
  }

  onMouseDown(event: MouseEvent) {
    const target = event.target! as HTMLTextAreaElement;
    target.selectionStart = target.value.length;
  }

  canRecordKeys(event: KeyboardEvent) {
    const canRecord =
      this.keyStrokeRecorder.checkKeyValid(
        event.code as AvailableKeyCodes,
        event.ctrlKey
      ) &&
      this.checkIfAtEnd((event.target as HTMLInputElement).selectionStart!);

    return canRecord;
  }

  checkIfAtEnd(cursorPos: number) {
    return cursorPos == this.diaryControl.value.length;
  }

  onDragEnter($event: Event) {
    $event.preventDefault();
    ($event.target as HTMLInputElement).selectionStart = (
      $event.target as HTMLInputElement
    ).value.length;
  }
}
