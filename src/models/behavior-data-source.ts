import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

export class BehaviorDataSource extends DataSource<any[]> {

  constructor(private _data: Observable<any[]>) {
    super();
  }

  connect(): Observable<any[]> {
    return this._data;
  }

  disconnect(): void {}
  
}