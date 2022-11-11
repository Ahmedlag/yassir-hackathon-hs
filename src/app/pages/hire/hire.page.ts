import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedService} from '../../services/shared.service';
import {Candidate} from "../../interfaces/candidate";

@Component({
  selector: 'app-hire',
  templateUrl: './hire.page.html',
  styleUrls: ['./hire.page.scss'],
})
export class HirePage implements OnInit {

  candidates: Candidate;
  constructor(private nav: NavController, private shared: SharedService) { }

  ngOnInit() {
    this.shared.toggleMenu(false);
    this.shared.candidate.subscribe((candidate) => {
      this.candidates = candidate;
    });
  }

  goBack() {
    this.nav.pop();
  }

  goToJobber() {
    this.shared.setCandidate(this.candidates);
    this.nav.navigateForward('/jobber-details');
  }

  close() {
    this.nav.navigateRoot('/home');
  }
}
