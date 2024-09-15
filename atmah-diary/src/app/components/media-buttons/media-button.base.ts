import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atmah-media-button',
  template: '',
  styleUrl: './media-button.scss',
})
export abstract class MediaButtonBase {
  @Input('disabled') disabled: boolean = false;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
