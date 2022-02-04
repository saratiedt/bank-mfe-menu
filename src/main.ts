import { APP_BASE_HREF } from "@angular/common";
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { SingleSpaProps } from "./single-spa/single-spa-props";
import { SingleSpaPropsService } from "./single-spa/single-spa-props.service";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  {
    provide: APP_BASE_HREF,
    useValue: environment.baseURL,
  },
  {
    provide: SingleSpaPropsService,
    useValue: new SingleSpaPropsService({ baseHref: "/" } as SingleSpaProps),
  },
])
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
