import { Component } from "@angular/core";
import { MenuService } from "./menu/menu.service";

@Component({
  selector: "mfe-menu-root",
  template: `
  <ng-container *ngIf="menuService.menu$ | async">
    <mfe-menu-menu></mfe-menu-menu>
  </ng-container>`,
})
export class AppComponent {
  title = "mfe-menu";
  constructor(public readonly menuService: MenuService) { }
}
