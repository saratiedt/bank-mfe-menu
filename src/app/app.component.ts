import { Component } from "@angular/core";
import { startWith } from "rxjs/operators";
import { MenuService } from "mfe-lib-components";

@Component({
  selector: "mfe-menu-root",
  template: `<ng-container *ngIf="menu$ | async">
    <mfe-menu-menu></mfe-menu-menu>
  </ng-container>`,
})
export class AppComponent {
  title = "mfe-menu";
  constructor(private readonly menuService: MenuService) { }
  menu$ = this.menuService.menu$.pipe(startWith(false));
}
