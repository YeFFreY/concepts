import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
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
    console.log('one more request to counter !');
    this.action$.next('INC');
  }
  dec(): void {
    console.log('one request removed from counter !');
    this.action$.next('DEC');
  }
}
