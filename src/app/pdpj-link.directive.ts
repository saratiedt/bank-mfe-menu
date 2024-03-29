import {
  Directive,
  HostListener,
  Inject,
  Input,
} from "@angular/core";
import { Router } from "@angular/router";
import { LOCATION } from "./location.token";

@Directive({
  selector: "[pdpjLink]",
})
export class PdpjLinkDirective {
  constructor(
    @Inject(LOCATION)
    private readonly location: Location,
    private readonly router: Router
  ) {}

  @Input("pdpjLink") link: string;

  @HostListener("click") onClick() {
    const prefix = this.link.split("/")[0] || this.link.split("/")[1];
    return ["app1", "app2", "financial-core", "skeleton", "registration"].includes(prefix)
      ? this.router.navigateByUrl(this.link)
      : this.location.assign(this.link);
  }
}
