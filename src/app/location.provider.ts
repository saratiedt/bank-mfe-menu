import { ValueProvider } from "@angular/core";
import { LOCATION } from "./location.token";

export const LocationProvider: ValueProvider = {
    provide: LOCATION,
    useValue: window.location,
};