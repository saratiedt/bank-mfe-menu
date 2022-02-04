import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SingleSpaProps } from './single-spa-props';

@Injectable()
export class SingleSpaPropsService {

  private readonly _props: BehaviorSubject<SingleSpaProps>;

  constructor(props: SingleSpaProps) {
    this._props = new BehaviorSubject(props);
  }

  get props(): SingleSpaProps {
    return this._props.value;
  }

  get props$(): Observable<SingleSpaProps> {
    return this._props.asObservable();
  }
}
