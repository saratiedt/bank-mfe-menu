import { Injectable } from "@angular/core";
import { fromEvent, Subject } from "rxjs";
import { map, takeUntil, tap } from "rxjs/operators";

const MENU_EVENT = 'PDPJ-MENU-EVENT';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly destroy$ = new Subject();

  private set status(value: boolean) {
    sessionStorage.setItem(MENU_EVENT, JSON.stringify(value));
  }

  private get status(): boolean {
    const value = sessionStorage.getItem(MENU_EVENT);
    return !value ? false : JSON.parse(value) as boolean;
  }

  private dispatchEvent(detail: boolean) {
    const event = new CustomEvent<boolean>(MENU_EVENT, { detail });
    window.dispatchEvent(event);
  }

  get visible(): boolean {
    return this.status;
  }

  readonly menu$ = fromEvent<CustomEvent<boolean>>(window, MENU_EVENT)
    .pipe(
      takeUntil(this.destroy$),
      map(event => event.detail),
      tap(value => this.status = value),
    );

  show(): void {
    this.dispatchEvent(true);
  }

  hide(): void {
    this.dispatchEvent(false);
  }

  toggle(): void {
    return this.visible ? this.hide() : this.show();
  }

  destroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    sessionStorage.removeItem(MENU_EVENT);
  }

}
