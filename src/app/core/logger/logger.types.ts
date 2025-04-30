export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    CRITICAL = 4,
    OFF = 5
  }
  
  export interface LogEntry {
    timestamp: string;
    level: LogLevel;
    message: string;
    additional: any[];
    stackTrace?: string;
  }
  
  export interface LoggerConfig {
    level: LogLevel;
    persist: boolean;
    persistLevel: LogLevel;
    serverLoggingUrl?: string;
    consoleOutput: boolean;
    maxPersistedLogs: number;
    productionMode: boolean;
  }