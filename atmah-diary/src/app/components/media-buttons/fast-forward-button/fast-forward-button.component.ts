import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'atmah-fast-forward-button',
  templateUrl: './fast-forward-button.component.html',
  styleUrl: './fast-forward-button.component.scss',
})
export class FastForwardButtonComponent {
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
