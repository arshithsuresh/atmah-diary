import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { DiaryPageFeature } from '../store/diary-feature';
import { map, Subject, takeUntil } from 'rxjs';
import { DiaryPageActions } from '../store/diary-feature/actions';
import {
  NO_RECORDER_COMPONENT,
  NO_RECORDER_FORM_CONTROL,
} from '../errors/dev-errors';
import { IRecorderService } from '../iservices/IRecorderService';
import { IReplayService } from '../iservices/IReplayService';
import { AvailableKeyCodes } from '../enum/keyboard-key.enum';
import { FormControl } from '@angular/forms';
import { CAN_RECORD_TOKEN } from '../tokens/can-record.token';
import { SharedActionsService } from '../views/diary/services/shared-actions.service';
import { IKeyListenerService } from '../iservices/IKeyListenerService';
import { PhysicalKeyboardListenerService } from '../views/diary/services/physical-keyboard-listener.service';
import { KeyboardInput } from '../models/keyinput.model';

@Component({
  template: '',
})
export abstract class KeypressRecordableComponent<FState>
  implements AfterViewInit, OnDestroy
{
  @HostListener('click', ['$event'])
  _onFocus(event: MouseEvent) {
    if (this.isControlDisabled || !this.isReadyToRecord()) {
      event.preventDefault();
      return;
    }

    this.onFocus();
  }

  @ViewChild('recorderInput') recorderElement!: ElementRef<HTMLInputElement>;
  @Input({ alias: 'recorder-id', required: true }) recorderId!: string;

  @Output('selected')
  $componentSelected: EventEmitter<void> = new EventEmitter();

  protected store = inject(Store<FState>);
  protected $destroyed: Subject<void> = new Subject();
  protected isSelectedComponent: boolean = false;
  protected keyStrokeRecorder: IRecorderService = inject(IRecorderService);
  protected keyReplay: IReplayService = inject(IReplayService);
  protected sharedActions: SharedActionsService = inject(SharedActionsService);
  protected inRecordingPage: boolean = inject(CAN_RECORD_TOKEN);
  protected keyListeners: IKeyListenerService<ElementRef> =
    inject(IKeyListenerService);

  private currentFocusedComponent = this.store
    .select(DiaryPageFeature.selectFocusedComponent)
    .pipe(takeUntil(this.$destroyed));

  private _pageDataSelector = this.store
    .select(DiaryPageFeature.selectPageData)
    .pipe(takeUntil(this.$destroyed));

  get pageDataSelector() {
    return this._pageDataSelector;
  }

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

    this.currentFocusedComponent
      .pipe(map(selectedComponent => this.recorderId == selectedComponent))
      .subscribe(isSelected => {
        this.isSelectedComponent = isSelected;

        if (this.isSelectedComponent) {
          this.keyReplay.setControl(this.recordControl, this.recorderId);
        }

        this.$componentSelected.emit();
      });

    this.sharedActions.resetComponents$
      .pipe(takeUntil(this.$destroyed))
      .subscribe(componentId => {
        if ((componentId && componentId == this.recorderId) || !componentId) {
          this.recordControl.reset();
          this.recordControl.setValue('');
        }
      });

    if (!this.inRecordingPage) this.recordControl.disable();
  }

  testKeyDown(input: KeyboardInput) {
    console.log(`INPUT :: ${this.recorderId}`, input);
  }
  addEventListeners() {
    // this.recorderElement.nativeElement.onkeypress = this.onKeyDown.bind(this);

    // this.keyListeners.registerKeyDown(
    //   this.recorderElement,
    //   this.testKeyDown.bind(this)
    // );

    this.recorderElement.nativeElement.onclick = this.onMouseDown.bind(this);
    this.recorderElement.nativeElement.onselect = this.onDragEnter.bind(this);
  }

  onInputEvent(event: Event): any {
    const IEvent = event as InputEvent;
    console.log(IEvent.data, IEvent.detail);
  }

  registerRecordableComponent() {
    this.store.dispatch(
      DiaryPageActions.registerRecordableComponent({
        componentId: this.recorderId,
        component: true,
      })
    );
  }

  componentSelected() {
    if (this.isSelectedComponent) return;

    this.store.dispatch(
      DiaryPageActions.setFocusRecordableComponent({
        componentId: this.recorderId,
      })
    );
  }

  onKeyDown(event: KeyboardEvent) {
    event.preventDefault();
    console.log(event.location);
    if (!this.canRecordKeys(event)) {
      //return;
    }

    this.recordControl.setValue(this.recordControl.value + 's');

    this.keyStrokeRecorder.recordAction(event, this.recorderId);

    if (event.code == 'Enter') {
      //console.log(this.keyStrokeRecorder.pageData.keyData);
    }
  }

  onMouseDown(event: MouseEvent) {
    if (this.isControlDisabled || !this.isReadyToRecord()) {
      event.preventDefault();
      return;
    }

    const target = event.target! as HTMLTextAreaElement;
    target.selectionStart = target.value.length;
  }

  canRecordKeys(event: KeyboardEvent) {
    const isValidKey = this.keyStrokeRecorder.checkKeyValid(
      event.code as AvailableKeyCodes,
      event.ctrlKey
    );

    const atEnd = this.checkIfAtEnd(
      (event.target as HTMLInputElement).selectionStart!
    );

    return (
      this.isReadyToRecord() &&
      this.isSelectedComponent &&
      atEnd &&
      isValidKey &&
      !this.isControlDisabled
    );
  }

  isReadyToRecord() {
    return this.inRecordingPage && this.keyStrokeRecorder.isRecording;
  }

  checkIfAtEnd(cursorPos: number) {
    return cursorPos == this.recordControl.value.length;
  }

  focusControl() {
    this.recorderElement.nativeElement.focus();
  }

  resetControls() {
    if (this.recordControl) this.recordControl.reset();
  }

  onDragEnter($event: Event) {
    $event.preventDefault();
    ($event.target as HTMLInputElement).selectionStart = (
      $event.target as HTMLInputElement
    ).value.length;
  }

  ngOnInit(): void {}

  abstract onFocus(): void;
}
