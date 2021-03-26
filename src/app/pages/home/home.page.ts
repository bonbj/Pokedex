import { Component } from '@angular/core';
import { PageStore } from 'src/app/stores/pages.store';
import { Pokedex } from 'src/app/stores/pokedex.store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public pokedex:Pokedex,
    public pageStore: PageStore
  ) {}

  public loadMorePokemon($event) : void {
    setTimeout(() => {
      $event.target.complete();

      this.pokedex.showListPokemon = [...this.pokedex.showListPokemon,...this.pokedex.hideListPokemon.slice(0,30)];
      this.pokedex.hideListPokemon = this.pokedex.hideListPokemon.slice(30);

      if (this.pokedex.showListPokemon.length == 899) {
        $event.target.disabled = true;
      }
    }, 500);
    
  }

}
