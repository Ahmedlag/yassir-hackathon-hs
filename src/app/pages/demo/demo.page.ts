import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  go() {
    this.nav.navigateForward('/login');
  }
}
