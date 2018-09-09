import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ScanSessionModel } from '../../models/scan-session.model';
import { SettingsModel } from '../../models/settings.model';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {
  private static SCAN_SESSIONS = "scan_sessions";
  private static SETTINGS = "settings";
  private static EVER_CONNECTED = "ever_connected";

  constructor(
    public storage: Storage
  ) {
    console.log('Hello StorageProvider Provider');
  }

  getScanSessions(): ScanSessionModel[] {
    return JSON.parse(localStorage.getItem(StorageProvider.SCAN_SESSIONS)) || [];
  }

  setScanSessions(scanSessions: ScanSessionModel[]) {
    localStorage.setItem(StorageProvider.SCAN_SESSIONS, JSON.stringify(scanSessions));
  }


  getSettings(): SettingsModel {
    return JSON.parse(localStorage.getItem(StorageProvider.SETTINGS)) || new SettingsModel();
  }

  setSettings(settings: SettingsModel) {
    localStorage.setItem(StorageProvider.SETTINGS, JSON.stringify(settings));
  }

  getEverConnected(): boolean {
    return JSON.parse(localStorage.getItem(StorageProvider.EVER_CONNECTED)) || false;
  }

  setEverConnected(everConnected: boolean) {
    localStorage.setItem(StorageProvider.EVER_CONNECTED, JSON.stringify(everConnected));
  }
}
