import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobberDetailsPage } from './jobber-details.page';

const routes: Routes = [
  {
    path: '',
    component: JobberDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobberDetailsPageRoutingModule {}
