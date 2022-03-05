import { KalymbaConfig } from './module/config';

declare global {
  interface CONFIG {
    KALYMBA: KalymbaConfig;
  }
}
