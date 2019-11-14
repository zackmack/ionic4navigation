import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Next2Page } from './next2.page';

const routes: Routes = [
  {
    path: '',
    component: Next2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Next2PageRoutingModule {}
