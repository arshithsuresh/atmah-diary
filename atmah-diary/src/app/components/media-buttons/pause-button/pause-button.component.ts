import { Component } from '@angular/core';
import { MediaButtonBase } from '../media-button.base';

@Component({
  selector: 'atmah-pause-button',
  templateUrl: './pause-button.component.html',
  styleUrls: ['../media-button.scss', './pause-button.component.scss'],
  standalone: false,
})
export class PauseButtonComponent extends MediaButtonBase {}
