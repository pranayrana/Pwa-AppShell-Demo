import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat } from 'rxjs/internal/observable/concat';
import { interval } from 'rxjs/internal/observable/interval';
import { first } from 'rxjs/operators';

@Injectable()
export class CheckUpdateService {

  constructor(appRef: ApplicationRef, swUpdate: SwUpdate) { 
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(10 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$.subscribe(() => swUpdate.checkForUpdate().then(()=> console.log("update checked")));
  }
}
