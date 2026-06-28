import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

async function bootstrap(): Promise<void> {
  if (isDevMode()) {
    await import('@angular/compiler');
  }

  await bootstrapApplication(AppComponent, appConfig);
}

bootstrap().catch((error) => console.error(error));
