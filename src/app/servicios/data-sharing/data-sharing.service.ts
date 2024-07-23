import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private dataSource = new BehaviorSubject<[number, number]>([1, 12]);
  currentData = this.dataSource.asObservable();
  constructor() { }

  changeData(data: [number, number]) {
    this.dataSource.next(data);
  }
}
