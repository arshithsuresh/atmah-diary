import { Component } from '@angular/core';
import { MediaButtonBase } from '../media-button.base';

@Component({
  selector: 'atmah-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['../media-button.scss', './play-button.component.scss'],
  standalone: false,
})
export class PlayButtonComponent extends MediaButtonBase {}
