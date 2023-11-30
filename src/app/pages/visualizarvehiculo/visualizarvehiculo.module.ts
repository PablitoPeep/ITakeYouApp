import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarvehiculoPageRoutingModule } from './visualizarvehiculo-routing.module';

import { VisualizarvehiculoPage } from './visualizarvehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarvehiculoPageRoutingModule
  ],
  declarations: [VisualizarvehiculoPage]
})
export class VisualizarvehiculoPageModule {}
