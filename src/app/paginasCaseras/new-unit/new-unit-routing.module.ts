import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewUnitPage } from './new-unit.page';

const routes: Routes = [
  {
    path: '',
    component: NewUnitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewUnitPageRoutingModule {}
