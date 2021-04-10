import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailedPage } from './pokemon-detailed.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDetailedPageRoutingModule {}
