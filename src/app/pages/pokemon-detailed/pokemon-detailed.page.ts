import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PageStore } from 'src/app/stores/pages.store';
import { Pokedex } from 'src/app/stores/pokedex.store';

@Component({
  selector: 'app-pokemon-detailed',
  templateUrl: './pokemon-detailed.page.html',
  styleUrls: ['./pokemon-detailed.page.scss'],
})
export class PokemonDetailedPage implements OnInit {

  public pokemon: Pokemon;

  constructor(
    private pageStore: PageStore,
    private pokedex: Pokedex
  ) { }

  ngOnInit() {
    this.pokemon = this.pokedex.allPokemon.find(pokemon => pokemon.id === this.pageStore.pokemonDetailedId);
  }

  public changeFavorite():void {
    this.pokemon.isFavorite = !this.pokemon.isFavorite;
  }

}
