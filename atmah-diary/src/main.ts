import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environment/environment';

if (environment.production) {
  window.console.log = (msg, ...options) => {};
} else {
  window.console.log = (msg, ...options) => {
    console.warn(msg, options);
    const pTag = document.createElement('p');
    pTag.innerHTML = msg;
    document.getElementById('logger-div')?.append(pTag);
  };
}

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
