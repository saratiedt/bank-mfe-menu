import { ExistingProvider } from "@angular/core";
import { MenuService } from "./menu.service";
import { MENU_SERVICE } from "./menu.token";

export const menuServiceProvider: ExistingProvider = {
    provide: MENU_SERVICE,
    useExisting: MenuService
};