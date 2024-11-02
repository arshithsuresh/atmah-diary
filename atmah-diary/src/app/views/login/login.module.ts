import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './login-view.component';
import { loginRoutes } from './login.routes';
import { provideRouter } from '@angular/router';
import { FullPageContainerComponent } from '../../components/full-page-container/full-page-container.component';

@NgModule({
  declarations: [LoginViewComponent],
  imports: [CommonModule, FullPageContainerComponent],
  providers: [provideRouter(loginRoutes)],
})
export class LoginModule {}
