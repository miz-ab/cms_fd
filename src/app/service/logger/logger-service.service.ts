import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerConfig, LogEntry, LogLevel} from '../../core/logger/logger.types'
//import { environment } from '../environments/environment';


const DEFAULT_CONFIG: LoggerConfig = {
  level: LogLevel.DEBUG,
  persist: true,
  persistLevel: LogLevel.WARN,
  consoleOutput: true,
  maxPersistedLogs: 50,
  productionMode: false
};

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {
  private config: LoggerConfig;
  private logs: LogEntry[] = [];
  private readonly STORAGE_KEY = 'app_logs';

  constructor(
    @Optional() private http: HttpClient,
    @Optional() @Inject('LOGGER_CONFIG') customConfig?: Partial<LoggerConfig>
  ) {
    this.config = { ...DEFAULT_CONFIG, ...customConfig };
    this.loadPersistedLogs();
  }

  private normalizeError(error: any): any {
    if (error instanceof Error) {
      const angularError = error as Error & {
        ngDebugContext?: any;
        ngErrorLogger?: any;
      };
      
      return {
        name: angularError.name,
        message: angularError.message,
        stack: angularError.stack,
        ...(angularError.ngDebugContext && { context: angularError.ngDebugContext }),
        ...(angularError.ngErrorLogger && { logger: angularError.ngErrorLogger })
      };
    }
    return error;
  }

    // Public logging methods
    debug(message: string, ...additional: any[]): void {
      this.log(LogLevel.DEBUG, message, additional);
    }
  
    info(message: string, ...additional: any[]): void {
      this.log(LogLevel.INFO, message, additional);
    }
  
    warn(message: string, ...additional: any[]): void {
      this.log(LogLevel.WARN, message, additional);
    }
  
    error(message: string, ...additional: any[]): void {
      const stack = new Error().stack;
      this.log(LogLevel.ERROR, message, additional, stack);
    }

    critical(message: string, ...additional: any[]): void {
      const stack = new Error().stack;
      this.log(LogLevel.CRITICAL, message, additional, stack);
    }

    getLogs(): LogEntry[] {
      return [...this.logs];
    }
  
    clearLogs(): void {
      this.logs = [];
      localStorage.removeItem(this.STORAGE_KEY);
    }
  
    setConfig(config: Partial<LoggerConfig>): void {
      this.config = { ...this.config, ...config };
    }

    // Private implementation
  private log(level: LogLevel, message: string, additional: any[] = [], stackTrace?: string): void {
    if (level < this.config.level) return;

    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      additional,
      stackTrace
    };

    if (this.config.consoleOutput) {
      this.consoleLog(level, entry);
    }

    this.logs.push(entry);

    if (this.config.persist && level >= this.config.persistLevel) {
      this.persistLog(entry);
    }

    if (this.config.serverLoggingUrl && level >= LogLevel.ERROR) {
      this.sendToServer(entry);
    }

    if (this.logs.length > this.config.maxPersistedLogs * 2) {
      this.logs = this.logs.slice(-this.config.maxPersistedLogs);
    }
  }

  private consoleLog(level: LogLevel, entry: LogEntry): void {
    const styles = this.getConsoleStyles(level);
    const logFn = this.getConsoleMethod(level);
    
    logFn(
      `%c[${LogLevel[level]}] %c${entry.timestamp}`,
      styles.levelStyle,
      styles.timestampStyle,
      entry.message,
      ...entry.additional
    );

    if (entry.stackTrace && level >= LogLevel.ERROR) {
      console.log('%cStack trace:', 'color: #888; font-style: italic;', entry.stackTrace);
    }
  }

  private getConsoleMethod(level: LogLevel): (...args: any[]) => void {
    return [console.debug, console.info, console.warn, console.error, console.error][level] || console.log;
  }

  private getConsoleStyles(level: LogLevel): { levelStyle: string; timestampStyle: string } {
    const colors = ['#7fdbff', '#39cccc', '#ffdc00', '#ff4136', '#85144b'];
    return {
      levelStyle: `font-weight: bold; padding: 2px 4px; border-radius: 3px; background-color: ${colors[level] || '#aaa'}; color: ${level >= LogLevel.ERROR ? 'white' : 'black'};`,
      timestampStyle: `color: ${colors[level] || '#aaa'};`
    };
  }

  private persistLog(entry: LogEntry): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      const persistedLogs = stored ? JSON.parse(stored) : [];
      persistedLogs.push(entry);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(
        persistedLogs.slice(-this.config.maxPersistedLogs)
      ));
    } catch (error) {
      console.error('Logger persistence error:', error);
    }
  }

  private loadPersistedLogs(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) this.logs = JSON.parse(stored);
    } catch (error) {
      console.error('Logger load error:', error);
    }
  }


  private sendToServer(entry: LogEntry): void {
    if (!this.http || !this.config.serverLoggingUrl) return;
    this.http.post(this.config.serverLoggingUrl, entry).subscribe({
      error: (err) => console.error('Logger server error:', err)
    });
  }

}
