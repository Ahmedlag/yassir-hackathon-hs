import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  selectedServices: string;

  constructor(private sharedServices: SharedService, private nav: NavController) { }

  ngOnInit() {
    this.sharedServices.category.subscribe((services) => {
      this.selectedServices = services;
    });
  }

  ionViewWillEnter() {
    this.sharedServices.toggleMenu(false);
  }

  goBack() {
    this.nav.pop();
  }
}
