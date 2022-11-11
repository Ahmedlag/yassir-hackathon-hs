import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Candidate} from '../../interfaces/candidate';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-jobber-details',
  templateUrl: './jobber-details.page.html',
  styleUrls: ['./jobber-details.page.scss'],
})
export class JobberDetailsPage implements OnInit {

  candidate: Candidate;

  constructor(private shared: SharedService, private nav: NavController) { }

  ngOnInit() {
    this.shared.candidate.subscribe((candidate) => {
      this.candidate = candidate;
    });
  }

  goBack() {
    this.nav.pop();
  }

  hire() {
    this.shared.setCandidate(this.candidate);
    this.nav.navigateForward('/hire');
  }
}
