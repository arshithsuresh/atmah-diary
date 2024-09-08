import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'atmah-replay-button',
  templateUrl: './replay-button.component.html',
  styleUrl: './replay-button.component.scss',
})
export class ReplayButtonComponent {
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
