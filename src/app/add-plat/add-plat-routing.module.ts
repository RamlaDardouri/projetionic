import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlatPage } from './add-plat.page';

const routes: Routes = [
  {
    path: '',
    component: AddPlatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPlatPageRoutingModule {}
