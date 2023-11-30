import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarvehiculoPage } from './visualizarvehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarvehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarvehiculoPageRoutingModule {}
