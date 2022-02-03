import "./set-public-path";
import { enableProdMode, NgZone } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { ɵAnimationEngine as AnimationEngine } from "@angular/animations/browser";
import singleSpaAngular from "single-spa-angular";
import singleSpaCss from "single-spa-css";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import {
  SingleSpaProps,
  singleSpaPropsSubject,
} from "./single-spa/single-spa-props";
import { APP_BASE_HREF } from "@angular/common";

if (environment.production) {
  try {
    enableProdMode();
  } catch (error) {}
}

const cssLifecycles = singleSpaCss({
  cssUrls: [],
});

const lifecycles = singleSpaAngular({
  bootstrapFunction: (props: SingleSpaProps) => {
    singleSpaPropsSubject.next(props);
    return platformBrowserDynamic([
      { provide: APP_BASE_HREF, useValue: props.appBaseHref },
    ]).bootstrapModule(AppModule);
  },
  template: "<mfe-menu-root />",
  Router,
  NgZone: NgZone,
  AnimationEngine: AnimationEngine,
});

export const bootstrap = [cssLifecycles.bootstrap, lifecycles.bootstrap];
export const mount = [cssLifecycles.mount, lifecycles.mount];
export const unmount = [lifecycles.unmount, cssLifecycles.unmount];

export * from "./app/menu/menu.provider";
export * from "./app/menu/menu.service";
export * from "./app/menu/menu.token";
