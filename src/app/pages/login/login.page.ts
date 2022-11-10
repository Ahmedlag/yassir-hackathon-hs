import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading: boolean;

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  go() {
    this.isLoading = true;
    setTimeout(() => {
      this.nav.navigateForward('/home');
    }, 3000);
  }
}
