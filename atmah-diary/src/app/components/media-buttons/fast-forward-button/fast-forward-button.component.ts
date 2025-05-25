import { Component } from '@angular/core';
import { MediaButtonBase } from '../media-button.base';

@Component({
  selector: 'atmah-fast-forward-button',
  templateUrl: './fast-forward-button.component.html',
  styleUrls: ['../media-button.scss', './fast-forward-button.component.scss'],
  standalone: false,
})
export class FastForwardButtonComponent extends MediaButtonBase {}
