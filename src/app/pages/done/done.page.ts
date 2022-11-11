import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedService} from '../../services/shared.service';
import {Candidate} from '../../interfaces/candidate';

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage implements OnInit {

  // generate random candidates
  candidates: Candidate[];
  constructor(private nav: NavController, private shared: SharedService) { }

  ngOnInit() {
    this.gettingRecommendations();
  }

  close() {
    this.nav.navigateRoot('/home').then(() => {
      this.nav.navigateForward('/requests');
    });
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

  goToJobber(candidate: any) {
    this.shared.setCandidate(candidate);
    this.nav.navigateForward('/jobber-details');
  }

  hire(candidate: Candidate) {
    this.shared.setCandidate(candidate);
    this.nav.navigateForward('/hire');
  }
}
