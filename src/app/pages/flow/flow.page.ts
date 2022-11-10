import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from "@ionic/angular";
import {GlobalMapComponent} from "../../compoenents/global-map/global-map.component";

@Component({
  selector: 'app-flow',
  templateUrl: './flow.page.html',
  styleUrls: ['./flow.page.scss'],
})
export class FlowPage implements OnInit {

  @ViewChild('stepperSlider') stepperSlider: IonSlides;
  selectedDate: any;

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.stepperSlider.slideTo(2);
  }

  goBack() {

  }

  close() {

  }

  openMap() {
    const open = this.modal.create({
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
    });
  }

  updateDate($event: any) {
    console.log($event.detail.value);
  }

  nextSlide() {

  }
}
