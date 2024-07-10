import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private triggerFunctionSource = new Subject<void>();
  triggerFunction$ = this.triggerFunctionSource.asObservable();

  triggerFunction() {

    
    this.triggerFunctionSource.next();
  }
}
