import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Next1Page } from './next1.page';

const routes: Routes = [
  {
    path: '',
    component: Next1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Next1PageRoutingModule {}
