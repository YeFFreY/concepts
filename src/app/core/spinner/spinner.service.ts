import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map, scan} from 'rxjs/operators';

@Injectable()
export class SpinnerService {
  action$ = new Subject();
  counter$ = this.action$.asObservable().pipe(
    map(action => action === 'INC' ? 1 : -1),
    scan((acc, value) => acc + value)
  );
  running$ = this.counter$.pipe(
    map(value => value > 0)
  );

  constructor() {}

  isRunning(): Observable<boolean> {
    return this.running$;
  }

  inc(): void {
    this.action$.next('INC');
  }
  dec(): void {
    this.action$.next('DEC');
  }
}
