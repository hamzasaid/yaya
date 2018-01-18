import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable'

export class ObservableDataSource extends DataSource<any[]> {

  constructor(private _data: Observable<any[]>) {
    super();
  }

  connect(): Observable<any[]> {
    return this._data;
  }

  disconnect(): void {}
  
}