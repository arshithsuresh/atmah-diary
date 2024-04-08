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
import { KeyCodeMapping } from '../../../constants/keyboard-map.constatns';
import { AvailableKeyCodes, KeyCode } from '../../../enum/keyboard-key.enum';
import { testData } from './testData';
import { KeystrokeRecorderService } from '../services/keystroke-recorder.service';
import { ReplayKeystrokeService } from '../services/replay-keystroke.service';

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
  private _lastKeystrokeTime: number;

  private singleLinedata: SingleLineData;

  constructor(
    private keyStrokeRecorder: KeystrokeRecorderService,
    private keyReplay: ReplayKeystrokeService
  ) {
    this._lastKeystrokeTime = Date.now();
    this.singleLinedata = { keyData: [], nextData: null };
  }
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

    const currentTime = Date.now();
    const keyStrokeDiff = Math.max(
      10,
      Math.min(currentTime - this._lastKeystrokeTime, 5000)
    );

    console.log(`${event.key} ${event.code} : Interval : ${keyStrokeDiff}`);

    let [keyCharacter, waitTime] = this.keyStrokeRecorder.recordKey(
      event.code as AvailableKeyCodes,
      keyStrokeDiff,
      event.shiftKey
    );

    this.singleLinedata.keyData.push({
      k: keyCharacter,
      w: waitTime,
    });

    if (event.code == 'Enter') {
      console.log(this.singleLinedata);
    }

    this._lastKeystrokeTime = Date.now();
  }

  onMouseDown(event: MouseEvent) {
    const target = event.target! as HTMLTextAreaElement;
    const selectionStart = target.selectionStart;

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
