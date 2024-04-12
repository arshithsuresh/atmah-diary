import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'atmah-play-button',
  templateUrl: './play-button.component.html',
  styleUrl: './play-button.component.scss',
})
export class PlayButtonComponent {
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
