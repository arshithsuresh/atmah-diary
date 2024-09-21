import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './login-view.component';
import { loginRoutes } from './login.routes';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [LoginViewComponent],
  imports: [CommonModule],
  providers: [provideRouter(loginRoutes)],
})
export class LoginModule {}
