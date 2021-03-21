import { Component } from '@angular/core';
import { Pokedex } from 'src/app/stores/pokedex.store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public pokedex:Pokedex
  ) {}

  public loadMorePokemon($event) : void {
    setTimeout(() => {
      $event.target.complete();

      this.pokedex.showListPokemon = [...this.pokedex.showListPokemon,...this.pokedex.hideListPokemon.slice(0,10)];
      this.pokedex.hideListPokemon = this.pokedex.hideListPokemon.slice(10);

      if (this.pokedex.showListPokemon.length == 899) {
        $event.target.disabled = true;
      }
    }, 500);
    
  }

}
