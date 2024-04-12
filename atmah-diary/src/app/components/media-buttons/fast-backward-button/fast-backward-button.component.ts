import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'atmah-fast-backward-button',
  templateUrl: './fast-backward-button.component.html',
  styleUrl: './fast-backward-button.component.scss',
})
export class FastBackwardButtonComponent {
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
