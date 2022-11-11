import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Candidate} from "../interfaces/candidate";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  tabMenu: BehaviorSubject<boolean>;
  tabMenuName: BehaviorSubject<string>;
  category: BehaviorSubject<string> ;
  service: BehaviorSubject<string> ;
  request: BehaviorSubject<any>;
  candidate: BehaviorSubject<Candidate>;
  constructor() {
    this.tabMenu = new BehaviorSubject<boolean>(false);
    this.tabMenuName = new BehaviorSubject<string>('');
    this.category = new BehaviorSubject<string>('');
    this.service = new BehaviorSubject<string>('');
    this.request = new BehaviorSubject<any>(null);
    this.candidate = new BehaviorSubject<any>(null);
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

  setService(service: string) {
    this.service.next(service);
  }

  setRequest(request) {
    this.request.next(request);
  }

  setCandidate(candidate: any) {
    this.candidate.next(candidate);
  }
}
