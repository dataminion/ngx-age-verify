import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {StorageModel} from './storage.model';
import {StorageInterface} from './storage.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  public localObject: BehaviorSubject<StorageInterface>;
  public readonly object: Observable<StorageInterface>;
  public data: StorageModel;
  public name: string;

  constructor() {
    this.name = 'recentSession';
    const model: StorageModel = new StorageModel();

    this.localObject = new BehaviorSubject<StorageInterface>(model);
    this.object = this.localObject.asObservable();
    const storage = localStorage.getItem(this.name);
    if (storage) {
      this.data = JSON.parse(storage);
      this.localObject.next(Object.assign({}, this.data));
    }
  }

  public state(object: any) {
    of(object).subscribe(data => {
      this.data = data;
      localStorage.setItem(this.name, JSON.stringify(this.data) );
      this.localObject.next(Object.assign({}, this.data));
    });
  }
}
