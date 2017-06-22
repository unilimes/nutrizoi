import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SideMenuService {

  private open: string = 'out';
  private openListenerSub = new BehaviorSubject<string>(this.open);
  openLis = this.openListenerSub.asObservable();
  changeOpenListenerSub(open: string) {
    this.open = open;
    this.openListenerSub.next(this.open);
  }

}
