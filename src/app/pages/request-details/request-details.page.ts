import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {NavController} from '@ionic/angular';
import {Candidate} from "../../interfaces/candidate";

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.page.html',
  styleUrls: ['./request-details.page.scss'],
})
export class RequestDetailsPage implements OnInit {

  request: any;
  candidates: Candidate[];
  constructor(private shared: SharedService, private nav: NavController) { }

  ngOnInit() {
    this.shared.request.subscribe((request) => {
      this.request = request;
    });

    this.gettingRecommendations();
  }

  ionViewWillEnter() {
    this.shared.tabMenu.next(false);
  }

  goBack() {
    this.nav.pop();
  }

  gettingRecommendations() {
    const items = [
      {
        fullName: 'Patrick Matthews',
        firstName: 'Patrick',
        profilePicture: 'https://randomuser.me/api/portraits/men/21.jpg',
        isPro: true,
        reviews: 12,
        rating: 4.5,
        price: 3000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia.',
      },
      {
        fullName: 'Sarah Smith',
        firstName: 'Sarah',
        profilePicture: 'https://randomuser.me/api/portraits/women/21.jpg',
        isPro: false,
        reviews: 23,
        rating: 4.8,
        price: 2900,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl tincidunt nisl.',
      },
      {
        fullName: 'John Doe',
        firstName: 'John',
        profilePicture: 'https://randomuser.me/api/portraits/men/22.jpg',
        isPro: true,
        reviews: 45,
        rating: 4.2,
        price: 2000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.',
      },
      {
        fullName: 'William Johnson',
        firstName: 'William',
        profilePicture: 'https://randomuser.me/api/portraits/men/23.jpg',
        isPro: false,
        reviews: 39,
        rating: 4.7,
        price: 2500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl tincidunt nisl, nec ultricies elit nunc sed.',
      },
      {
        fullName: 'Mary Williams',
        firstName: 'Mary',
        profilePicture: 'https://randomuser.me/api/portraits/men/24.jpg',
        isPro: true,
        reviews: 41,
        rating: 4.9,
        price: 3000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia.',
      }
    ];
    setTimeout(() => {
      this.candidates = items;
    }, 2500);
  }

  hire(candidate: Candidate) {
    this.nav.navigateForward('/hire');
  }
}
