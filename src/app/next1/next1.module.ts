import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Next1PageRoutingModule } from './next1-routing.module';

import { Next1Page } from './next1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Next1PageRoutingModule
  ],
  declarations: [Next1Page]
})
export class Next1PageModule {}
