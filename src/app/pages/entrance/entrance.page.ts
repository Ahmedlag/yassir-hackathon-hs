import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.page.html',
  styleUrls: ['./entrance.page.scss'],
})
export class EntrancePage implements OnInit {
  active: boolean;
  showSpinner: boolean;

  constructor(private nav: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.showSpinner = true;
      setTimeout(() => {
        this.nav.navigateForward('/demo');
      }, 2000);
    }, 1000);
  }

}
