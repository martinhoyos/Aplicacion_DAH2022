import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewUnitPageRoutingModule } from './new-unit-routing.module';

import { NewUnitPage } from './new-unit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewUnitPageRoutingModule
  ],
  declarations: [NewUnitPage]
})
export class NewUnitPageModule {}
