import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritePagePageRoutingModule } from './favorite-page-routing.module';

import { FavoritePagePage } from './favorite-page.page';
import { SideMenuComponent } from 'src/app/component/side-menu/side-menu.component';
import { PokemonListItemComponent } from 'src/app/component/pokemon-list-item/pokemon-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritePagePageRoutingModule
  ],
  declarations: [
    FavoritePagePage,
    SideMenuComponent,
    PokemonListItemComponent
  ]
})
export class FavoritePagePageModule {}
