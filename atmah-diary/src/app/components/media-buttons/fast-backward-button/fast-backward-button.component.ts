import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MediaButtonBase } from '../media-button.base';

@Component({
  selector: 'atmah-fast-backward-button',
  templateUrl: './fast-backward-button.component.html',
  styleUrl: './fast-backward-button.component.scss',
})
export class FastBackwardButtonComponent extends MediaButtonBase {}
