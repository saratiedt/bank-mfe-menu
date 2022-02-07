import { AppProps } from 'single-spa';

export type SingleSpaProps = AppProps & {
  baseHref: string;
  routes: PdpjRoutes;
  routerRoutes: string[];
};
