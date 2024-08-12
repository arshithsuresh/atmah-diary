import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  template: '',
})
export abstract class RecordableComponent {
  @Output() componentSelected: EventEmitter<void> = new EventEmitter();
}
