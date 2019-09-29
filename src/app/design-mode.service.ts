import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignModeService {

  get inDesignMode$() {
    return this._inDesignMode$.asObservable();
  }

  // tslint:disable-next-line:variable-name
  private _inDesignMode$ = new ReplaySubject<boolean>(1);
  private _inDesignModeValue: boolean;

  constructor() {
    this.disableDesignMode();
  }

  enableDesignMode() {
    this.setDesignMode(true);
  }

  disableDesignMode() {
    this.setDesignMode(false);
  }

  toggleDesignMode() {
    this.setDesignMode(!this._inDesignModeValue);
  }

  private setDesignMode(enabled: boolean) {
    this._inDesignModeValue = enabled;
    this._inDesignMode$.next(enabled);
  }
}
