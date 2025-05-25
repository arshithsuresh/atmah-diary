import { Component } from '@angular/core';
import { mockStories } from '../../mocks/story-cards.mocks';

@Component({
    selector: 'atmah-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrl: './dashboard-view.component.scss',
    standalone: false
})
export class DashboardViewComponent {
  get myStories() {
    return mockStories;
  }

  constructor() {}
}
