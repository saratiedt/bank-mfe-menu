import { InjectionToken } from "@angular/core";
import { MenuService } from "./menu.service";

export const MENU_SERVICE = new InjectionToken<MenuService>('MFE_MENU_SERVICE');