import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'atmah-pause-button',
  templateUrl: './pause-button.component.html',
  styleUrl: './pause-button.component.scss',
})
export class PauseButtonComponent {
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
