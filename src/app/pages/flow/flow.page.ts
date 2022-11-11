import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, ModalController, NavController} from '@ionic/angular';
import {GlobalMapComponent} from '../../components/global-map/global-map.component';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.page.html',
  styleUrls: ['./flow.page.scss'],
})
export class FlowPage implements OnInit {

  @ViewChild('stepperSlider') stepperSlider: IonSlides;
  selectedDate: any;
  selectedService: string;
  stepValue: number;
  hideContinueButton: boolean;
  activeIllustration: number;
  constructor(private modal: ModalController,
              private nav: NavController,
              private sharedServices: SharedService) { }

  ngOnInit() {
    this.sharedServices.service.subscribe((service) => {
      this.selectedService = service;
    });
    this.activeIllustration = 1;
  }

  ionViewDidEnter() {
    this.sharedServices.toggleMenu(false);
    this.stepValue = 0.3;
    this.animateIllustration();
  }

  goBack() {
    this.stepperSlider.isBeginning().then((isBeginning) =>{
      if (isBeginning) {
        this.nav.pop();
      } else {
        this.stepperSlider.slidePrev().then(() => {
          this.stepValue -= 0.3;
        });
      }

    });
  }

  close() {
    this.nav.pop();
  }

  openMap() {
/*    const open = this.modal.create({
      component: GlobalMapComponent,
      componentProps: {
        data: {
          lat: 30.0444,
          lng: 31.2357
        }
      }
    });
    open.then((modal) => {
      modal.present();
    });*/
  }

  updateDate($event: any) {
    console.log($event.detail.value);
  }

  nextSlide() {

    this.stepperSlider.isEnd().then((isEnd) =>{
      if (isEnd) {
        console.log('end');
      } else {
        this.stepperSlider.slideNext().then(() => {
          this.stepValue += 0.3;
        });
      }

    });
  }

  updateSliderAndBarProgress() {
    this.stepperSlider.getActiveIndex().then(x => {
      const activeSlider = x + 1;
      this.stepperSlider.length().then(sl => {
        this.stepValue = activeSlider / sl;
      });
    });
    this.stepperSlider.isEnd().then((isEnd) =>{
      this.hideContinueButton = isEnd;
      if (isEnd) {
        setTimeout(() => {
          this.nav.navigateForward('/done');
        }, 6000);
      }
    });
  }

  animateIllustration() {
    const classes = ['animate__animated', 'animate__fadeIn', 'show'];
    const elements = document.getElementsByClassName('loading-img');
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add('hide');
    }
    const element = document.getElementsByClassName(`loading-img-${this.activeIllustration}`)[0];
    element.classList.remove('hide');
    element.classList.add(...classes);
    setTimeout(() => {
      element.classList.remove(...classes);
      this.activeIllustration = this.activeIllustration === 3 ? 1 : this.activeIllustration + 1;
      this.animateIllustration();
    }, 3000);
  }
}
