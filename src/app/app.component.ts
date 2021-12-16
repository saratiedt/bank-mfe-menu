import { Component } from "@angular/core";
import { tap } from "rxjs/operators";
import { MfeLibComponentsService } from "mfe-lib-components";

@Component({
  selector: "mfe-menu-root",
  template: `<ng-container *ngIf="menu$ | async">
    <mfe-menu-menu></mfe-menu-menu>
  </ng-container>`,
})
export class AppComponent {
  title = "mfe-menu";
  constructor(private readonly menuService: MfeLibComponentsService) { }
  menu$ = this.menuService.menu.pipe(tap(menu => console.log({ menu })));
}
