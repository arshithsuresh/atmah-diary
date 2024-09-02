import { Injectable, OnDestroy } from '@angular/core';
import { AvailableKeyCodes } from '../enum/keyboard-key.enum';
import { RecordEvent } from '../models/keystroke-data.model';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { DEFAULT_COMPONENT_NAME } from '../constants/default-values.constants';

@Injectable()
export abstract class IRecorderService implements OnDestroy {
  private _canRecord: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _destroyed: Subject<void> = new Subject();
  private _activeComponent: string = DEFAULT_COMPONENT_NAME;
  private _focusedComponent: string = DEFAULT_COMPONENT_NAME;

  canRecord$ = this._canRecord.pipe(takeUntil(this._destroyed));

  get isRecording() {
    return this._canRecord.value;
  }

  get focusedComponent() {
    return this._focusedComponent;
  }
  set focusedComponent(component: string) {
    this._focusedComponent = component;
  }

  get activeComponent() {
    return this._activeComponent;
  }
  set activeComponent(component: string) {
    this._activeComponent = component;
  }

  startRecording() {
    this._canRecord.next(true);
  }

  stopRecording() {
    this._canRecord.next(false);
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  abstract pageData: RecordEvent;
  abstract recordAction(event: KeyboardEvent): void;
  abstract recordKey(
    keycode: AvailableKeyCodes,
    waitTime: number,
    shift: boolean,
    ctrl?: boolean
  ): [keyCharacter: string, waitTime: number];
  abstract checkKeyValid(keycode: AvailableKeyCodes, ctrl: boolean): boolean;
}
