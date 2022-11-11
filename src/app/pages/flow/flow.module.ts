import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlowPageRoutingModule } from './flow-routing.module';

import { FlowPage } from './flow.page';
import {GlobalModule} from "../../components/global.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlowPageRoutingModule,
    GlobalModule
  ],
    declarations: [FlowPage]
})
export class FlowPageModule {}
