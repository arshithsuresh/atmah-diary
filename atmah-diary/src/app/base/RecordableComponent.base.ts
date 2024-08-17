import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { DiaryPageState, DiaryPageFeature } from '../store/diary-feature';
import { map, Subject, takeUntil } from 'rxjs';
import * as DiaryPageActions from '../store/diary-feature/actions';
import {
  NO_RECORDER_COMPONENT,
  NO_RECORDER_FORM_CONTROL,
} from '../errors/dev-errors';
import { IRecorderService } from '../iservices/IRecorderService';
import { IReplayService } from '../iservices/IReplayService';
import { AvailableKeyCodes } from '../enum/keyboard-key.enum';
import { FormControl } from '@angular/forms';

@Component({
  template: '',
})
export abstract class KeypressRecordableComponent
  implements AfterViewInit, OnDestroy
{
  @HostListener('click', ['$event'])
  _onFocus(event: MouseEvent) {
    if (this.isControlDisabled) {
      event.preventDefault();
      return;
    }

    console.log(`Click from ${this.recorderId}`);
    this.onFocus();
  }

  @ViewChild('recorderInput') recorderElement!: ElementRef<HTMLInputElement>;

  @Input({ alias: 'recorder-id', required: true }) recorderId!: string;

  @Output('selected')
  $componentSelected: EventEmitter<void> = new EventEmitter();

  private diaryStore = inject(Store<DiaryPageState>);
  private $destroyed: Subject<void> = new Subject();

  private currentSelectedComponent = this.diaryStore
    .select(DiaryPageFeature.selectCurrentComponent)
    .pipe(takeUntil(this.$destroyed));

  protected isSelectedComponent: boolean = false;
  protected keyStrokeRecorder: IRecorderService = inject(IRecorderService);
  protected keyReplay: IReplayService = inject(IReplayService);

  recordControl: FormControl = new FormControl('');

  get isControlDisabled() {
    return !this.keyReplay.paused;
  }

  ngAfterViewInit(): void {
    this.initialize();
  }

  ngOnDestroy(): void {
    this.$destroyed.next();
    this.$destroyed.complete();
  }

  initialize() {
    if (!this.recorderElement) {
      throw NO_RECORDER_COMPONENT(this.recorderId);
    }

    if (!this.recordControl) {
      throw NO_RECORDER_FORM_CONTROL(this.recorderId);
    }

    this.addEventListeners();
    this.registerRecordableComponent();

    this.currentSelectedComponent
      .pipe(map(selectedComponent => this.recorderId == selectedComponent))
      .subscribe(isSelected => {
        this.isSelectedComponent = isSelected;

        if (this.isSelectedComponent)
          this.keyReplay.setControl(this.recordControl, this.recorderId);

        this.$componentSelected.emit();
      });
  }

  addEventListeners() {
    this.recorderElement.nativeElement.onkeydown = this.onKeyDown.bind(this);
    this.recorderElement.nativeElement.onclick = this.onMouseDown.bind(this);
    this.recorderElement.nativeElement.onselect = this.onDragEnter.bind(this);
  }

  registerRecordableComponent() {
    this.diaryStore.dispatch(
      DiaryPageActions.RegisterRecordableComponent({
        componentId: this.recorderId,
        component: true,
      })
    );
  }

  componentSelected() {
    if (this.isSelectedComponent) return;

    this.diaryStore.dispatch(
      DiaryPageActions.FocusRecordableComponent({
        componentId: this.recorderId,
      })
    );
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
    if (this.isControlDisabled) {
      event.preventDefault();
      return;
    }

    const target = event.target! as HTMLTextAreaElement;
    target.selectionStart = target.value.length;
  }

  canRecordKeys(event: KeyboardEvent) {
    const canRecord = this.keyStrokeRecorder.checkKeyValid(
      event.code as AvailableKeyCodes,
      event.ctrlKey
    );
    const atEnd = this.checkIfAtEnd(
      (event.target as HTMLInputElement).selectionStart!
    );

    return (
      this.isSelectedComponent && atEnd && canRecord && !this.isControlDisabled
    );
  }

  checkIfAtEnd(cursorPos: number) {
    return cursorPos == this.recordControl.value.length;
  }

  onDragEnter($event: Event) {
    $event.preventDefault();
    ($event.target as HTMLInputElement).selectionStart = (
      $event.target as HTMLInputElement
    ).value.length;
  }

  ngOnInit(): void {
    this.recordControl.valueChanges
      .pipe(map((value: string) => value.at(-1)))
      .subscribe(key => {});
  }

  abstract onFocus(): void;
}
