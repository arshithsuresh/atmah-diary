import { ElementRef, Injectable } from '@angular/core';
import { IKeyListenerService } from '../../../iservices/IKeyListenerService';
import { KeyboardInput } from '../../../models/keyinput.model';
import { AvailableKeyCodes } from '../../../enum/keyboard-key.enum';

@Injectable()
export class PhysicalKeyboardListenerService extends IKeyListenerService<ElementRef> {
  listeners: Map<ElementRef, Function> = new Map();
  type = 'physical';

  constructor() {
    super();
  }

  registerKeyDown(
    recorderElement: ElementRef,
    callback: (event: KeyboardInput) => {}
  ): void {
    recorderElement.nativeElement.onkeydown = (event: KeyboardEvent) => {
      const keyboardEvent: KeyboardInput = {
        key: event.code as AvailableKeyCodes,
        type: this.type,
        ctrl: event.ctrlKey,
        shift: event.shiftKey,
        alt: event.altKey,
      };
      callback(keyboardEvent);
    };

    this.listeners.set(recorderElement.nativeElement, callback);
  }

  registerKeyUp(recorderElement: ElementRef, callback: Function): void {
    throw new Error('Method not implemented.');
  }

  registerEnter(recorderElement: ElementRef, callback: Function): void {
    throw new Error('Method not implemented.');
  }

  destroyAll() {
    this.listeners.forEach((_, element) => {
      element.nativeElement.onkeydown = null;
      element.nativeElement.onkeyup = null;
    });
  }
}
