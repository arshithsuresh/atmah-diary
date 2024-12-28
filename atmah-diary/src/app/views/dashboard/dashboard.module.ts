import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view.component';
import { provideRouter } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { StoryCardComponent } from '../../components/story-card/story-card.component';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [CommonModule, StoryCardComponent, HeaderComponent],
  providers: [provideRouter(dashboardRoutes)],
})
export class DashboardModule {}
