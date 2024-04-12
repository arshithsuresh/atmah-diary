import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayButtonComponent } from './play-button/play-button.component';
import { PauseButtonComponent } from './pause-button/pause-button.component';
import { FastForwardButtonComponent } from './fast-forward-button/fast-forward-button.component';
import { FastBackwardButtonComponent } from './fast-backward-button/fast-backward-button.component';
import { MediaControlComponent } from './media-control.component';

@NgModule({
  declarations: [
    PlayButtonComponent,
    PauseButtonComponent,
    FastForwardButtonComponent,
    FastBackwardButtonComponent,
    MediaControlComponent,
  ],
  imports: [CommonModule],
  exports: [
    PlayButtonComponent,
    PauseButtonComponent,
    FastForwardButtonComponent,
    FastBackwardButtonComponent,
    MediaControlComponent,
  ],
})
export class MediaButtonsModule {}
