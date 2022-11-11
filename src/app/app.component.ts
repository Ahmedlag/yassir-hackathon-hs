import { Component } from '@angular/core';
import {SharedService} from './services/shared.service';
import {NavController, Platform} from "@ionic/angular";
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selected: string;
  isActive: boolean;
  constructor(private sharedService: SharedService, private nav: NavController, private platform: Platform) {
    this.sharedService.tabMenu.subscribe((status: boolean) => {
      this.isActive = status;
    });
    this.sharedService.tabMenuName.subscribe((status: string) => {
      this.selected = status;
    });
    this.platform.ready().then(() => {
      const backgroundColor = async () => {
        await StatusBar.setBackgroundColor({color: '#FAF1F3'});
        await StatusBar.setOverlaysWebView({overlay: false});
      };
      const setStatusBarStyleDark = async () => {
        await StatusBar.setStyle({ style: Style.Dark });
      };


    });

  }
  startNewOrder() {
    this.nav.navigateForward('/categories');
  }

  navTo(val: string) {
    this.selected = val;
    this.nav.navigateForward('/' + val);
  }
}
