import { Component, Input } from '@angular/core';
import { StoryCardModel } from '../../models/story-card.model';

@Component({
    selector: 'atmah-story-card',
    imports: [],
    templateUrl: './story-card.component.html',
    styleUrl: './story-card.component.scss'
})
export class StoryCardComponent {
  @Input({ alias: 'data', required: true })
  _cardData!: StoryCardModel;

  get title() {
    return this._cardData.title;
  }

  get date() {
    return this._cardData.date;
  }
}
