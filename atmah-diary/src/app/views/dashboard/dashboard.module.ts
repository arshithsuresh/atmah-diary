import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view.component';
import { provideRouter } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [CommonModule],
  providers: [provideRouter(dashboardRoutes)],
})
export class DashboardModule {}
