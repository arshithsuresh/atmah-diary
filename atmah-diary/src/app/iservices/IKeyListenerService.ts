import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export abstract class IKeyListenerService<T extends ElementRef> {
  abstract type: string;

  abstract registerKeyDown(recorderElement: T, callback: Function): void;
  abstract registerKeyUp(recorderElement: T, callback: Function): void;
  abstract registerEnter(recorderElement: T, callback: Function): void;
}
