import { ErrorHandler, Provider } from '@angular/core';
import { LogLevel, LoggerConfig } from './logger.types';
import { GlobalErrorHandler } from './global-error-handler.service';

export function provideLogger(config: Partial<LoggerConfig>): Provider[] {
  return [
    { provide: 'LOGGER_CONFIG', useValue: config },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ];
}

export const DEFAULT_LOGGER_CONFIG: Partial<LoggerConfig> = {
  level: LogLevel.DEBUG,
  persist: true,
  persistLevel: LogLevel.WARN,
  consoleOutput: true,
  maxPersistedLogs: 100,
  productionMode: false
};