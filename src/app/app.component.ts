import { Component } from '@angular/core';
import {SharedService} from './services/shared.service';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selected: string;
  isActive: boolean;
  constructor(private sharedService: SharedService, private nav: NavController) {
    this.sharedService.tabMenu.subscribe((status: boolean) => {
      this.isActive = status;
    });
    this.sharedService.tabMenuName.subscribe((status: string) => {
      this.selected = status;
    });
  }
  startNewOrder() {
    this.nav.navigateForward('/categories');
  }
}
