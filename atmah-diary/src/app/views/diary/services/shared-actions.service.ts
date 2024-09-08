import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedActionsService {
  private _resetComponents: Subject<string | void> = new Subject();

  resetComponents$ = this._resetComponents.asObservable();

  constructor() {}

  resetAllComponents() {
    this._resetComponents.next();
  }

  resetComponent(componentId: string) {
    this._resetComponents.next(componentId);
  }
}
