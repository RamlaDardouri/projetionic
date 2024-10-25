import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlatPageRoutingModule } from './add-plat-routing.module';

import { AddPlatPage } from './add-plat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPlatPageRoutingModule
  ],
  declarations: [AddPlatPage]
})
export class AddPlatPageModule {}
