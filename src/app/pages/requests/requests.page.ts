import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  requests: any[];

  constructor(private nav: NavController, private shared: SharedService) {
    this.getRequests();
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.shared.setTabMenu('requests');
    this.shared.toggleMenu(true);
  }

  getRequests(type?) {
    const ongoing = [
      {
        service: 'Ironing',
        date: '12/12/2022',
        time: '15:00',
        status: 'ongoing',
        icon: '../assets/categories/ironing.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl tincidunt nisl, nec ultricies elit nunc sed.',
        address: '1234 Main St, New York, NY 10001',
      },
      {
        service: 'Cleaning',
        date: '31/11/20222',
        time: '12:00',
        status: 'ongoing',
        icon: '../assets/categories/cleaning.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl tincidunt nisl, nec ultricies elit nunc sed.',
        address: '28-30 41st St, Astoria, NY 11103',
      },
      {
        service: 'Carpet Cleaning',
        date: '04/12/2019',
        time: '10:00',
        status: 'ongoing',
        icon: '../assets/categories/carpet.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl tincidunt nisl, nec ultricies elit nunc sed.',
        address: '88-02 57th Ave, Elmhurst, NY 11373',
      },
      {
        service: 'Car Wash',
        date: '01/11/2022',
        time: '12:00 PM',
        status: 'ongoing',
        icon: '../assets/categories/carwashing.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl tincidunt nisl, nec ultricies elit nunc sed.',
        address: '111-11 72nd Rd, Forest Hills, NY 11375',
      }
    ];
    const finished = [
      {
        service: 'Ironing',
        date: '12/12/2022',
        time: '15:00',
        status: 'finished',
        icon: '../assets/categories/ironing.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl tincidunt nisl, nec ultricies elit nunc sed.',
      },
      {
        service: 'Cleaning',
        date: '31/11/20222',
        time: '12:00',
        status: 'finished',
        icon: '../assets/categories/cleaning.svg',
      }
      ];
    const cancelled = [
      {
        service: 'Ironing',
        date: '12/12/2022',
        time: '15:00',
        status: 'cancelled',
        icon: '../assets/categories/ironing.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl tincidunt nisl, nec ultricies elit nunc sed.',
      }
    ];

    switch (type?.detail?.value) {
      case 'ongoing':
        this.requests = ongoing;
        break;
      case 'finished':
        this.requests = finished;
        break;
      case 'cancelled':
        this.requests = cancelled;
        break;
      default:
        this.requests = ongoing;
    }
  }

  goToDetails(request) {
    this.shared.setRequest(request);
    this.nav.navigateForward('request-details');
  }
}
