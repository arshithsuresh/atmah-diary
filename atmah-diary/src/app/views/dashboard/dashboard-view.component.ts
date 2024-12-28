import { Component } from '@angular/core';
import { StoryCardModel } from '../../models/story-card.model';
import { mockStories } from '../../mocks/story-cards.mocks';

@Component({
  selector: 'atmah-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
})
export class DashboardViewComponent {
  get myStories() {
    return mockStories;
  }
}
