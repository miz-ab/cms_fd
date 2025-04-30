import { ErrorHandler, Injectable } from '@angular/core';
import { LoggerServiceService } from '../../service/logger/logger-service.service';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private logger: LoggerServiceService) {}

  handleError(error: any): void {
    this.logger.critical('Unhandled error', error);
    // Add any custom error handling logic here
  }
}