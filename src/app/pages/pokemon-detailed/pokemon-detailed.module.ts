import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonDetailedPageRoutingModule } from './pokemon-detailed-routing.module';

import { PokemonDetailedPage } from './pokemon-detailed.page';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDetailedPageRoutingModule
  ],
  declarations: [
    PokemonDetailedPage,
    NavbarComponent,
  ]
})
export class PokemonDetailedPageModule {}
