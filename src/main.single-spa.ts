import "./set-public-path";
import { enableProdMode, NgZone } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { ɵAnimationEngine as AnimationEngine } from "@angular/animations/browser";
import singleSpaAngular from "single-spa-angular";
import singleSpaCss from "single-spa-css";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { SingleSpaProps } from "./single-spa/single-spa-props";
import { APP_BASE_HREF } from "@angular/common";
import { SingleSpaPropsService } from "./single-spa/single-spa-props.service";

if (environment.production) {
  try {
    enableProdMode();
  } catch (error) {}
}

const cssLifecycles = singleSpaCss({
  cssUrls: [
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  ],
});

const lifecycles = singleSpaAngular({
  bootstrapFunction: (props: SingleSpaProps) =>
    platformBrowserDynamic([
      {
        provide: APP_BASE_HREF,
        useValue: props.baseHref,
      },
      {
        //substituir pelo Injection token da pdpj-lib-componentes
        provide: 'PDPJ_ROUTES',
        useValue: props.routes,
      },
      {
        //substituir pelo Injection token da pdpj-lib-componentes
        provide: 'PDPJ_ROUTER_ROUTES',
        useValue: props.routerRoutes,
      },
      {
        provide: SingleSpaPropsService,
        useValue: new SingleSpaPropsService(props),
      },
    ]).bootstrapModule(AppModule),
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
