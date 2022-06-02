import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUnitsPageRoutingModule } from './add-units-routing.module';

import { AddUnitsPage } from './add-units.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUnitsPageRoutingModule
  ],
  declarations: [AddUnitsPage]
})
export class AddUnitsPageModule {}
