import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private sharedServices: SharedService, private nav: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.sharedServices.setTabMenu('home');
    this.sharedServices.toggleMenu(true);
  }

  selectedCategory(category) {
    this.sharedServices.setCategory(category);
    this.nav.navigateForward('/services');
  }



}
