import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  tabMenu: BehaviorSubject<boolean>;
  tabMenuName: BehaviorSubject<string>;
  category: Observable<string> ;
  constructor() {
    this.tabMenu = new BehaviorSubject<boolean>(false);
    this.tabMenuName = new BehaviorSubject<string>('');
    this.category = this.tabMenuName.asObservable();
  }

  toggleMenu(status: boolean) {
    this.tabMenu.next(status);
  }

  setTabMenu(status: string) {
    this.tabMenuName.next(status);
  }

  setCategory(category: string) {
    this.tabMenuName.next(category);
  }
}
