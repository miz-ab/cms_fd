import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideLogger, DEFAULT_LOGGER_CONFIG} from './core/logger/logger.config';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNoopAnimations(),
    provideLogger({
      ...DEFAULT_LOGGER_CONFIG,
      serverLoggingUrl:'http://localhost:8080/api/v1/logs',
      productionMode: false
    })
  ]
};
