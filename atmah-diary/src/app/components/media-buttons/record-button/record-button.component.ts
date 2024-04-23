import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'atmah-record-button',
  templateUrl: './record-button.component.html',
  styleUrl: './record-button.component.scss',
})
export class RecordButtonComponent {
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
