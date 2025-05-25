import { Component } from '@angular/core';
import { MediaButtonBase } from '../media-button.base';

@Component({
  selector: 'atmah-replay-button',
  templateUrl: './replay-button.component.html',
  styleUrls: ['./replay-button.component.scss', '../media-button.scss'],
  standalone: false,
})
export class ReplayButtonComponent extends MediaButtonBase {}
