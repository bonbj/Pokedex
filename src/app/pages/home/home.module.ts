import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';
import { SideMenuComponent } from 'src/app/component/side-menu/side-menu.component';
import { FilterMenuComponent } from 'src/app/component/filter-menu/filter-menu.component';
import { SearchBarComponent } from 'src/app/component/search-bar/search-bar.component';
import { PokemonListItemComponent } from 'src/app/component/pokemon-list-item/pokemon-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    SideMenuComponent,
    FilterMenuComponent,
    SearchBarComponent,
    PokemonListItemComponent
  ]
})
export class HomePageModule {}
