import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  selectedCategory: string;

  constructor(private sharedServices: SharedService, private nav: NavController) { }

  ngOnInit() {
    this.sharedServices.category.subscribe((category) => {
      this.selectedCategory = category;
    });
  }

  ionViewWillEnter() {
    this.sharedServices.toggleMenu(false);
  }

  goBack() {
    this.nav.pop();
  }
}
