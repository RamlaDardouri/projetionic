import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlatPageRoutingModule } from './update-plat-routing.module';

import { UpdatePlatPage } from './update-plat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlatPageRoutingModule
  ],
  declarations: [UpdatePlatPage]
})
export class UpdatePlatPageModule {}
