import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Next2PageRoutingModule } from './next2-routing.module';

import { Next2Page } from './next2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Next2PageRoutingModule
  ],
  declarations: [Next2Page]
})
export class Next2PageModule {}
