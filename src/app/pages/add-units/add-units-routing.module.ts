import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUnitsPage } from './add-units.page';

const routes: Routes = [
  {
    path: '',
    component: AddUnitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUnitsPageRoutingModule {}
