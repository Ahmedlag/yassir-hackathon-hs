import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobberDetailsPageRoutingModule } from './jobber-details-routing.module';

import { JobberDetailsPage } from './jobber-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobberDetailsPageRoutingModule
  ],
  declarations: [JobberDetailsPage]
})
export class JobberDetailsPageModule {}
