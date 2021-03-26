import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PageStore } from 'src/app/stores/pages.store';
import { Pokedex } from 'src/app/stores/pokedex.store';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent{

  constructor(
    public pageStore:PageStore,
    private pokedex: Pokedex
  ) { }
  public closeSeach(): void {
    this.pageStore.isSearchBarShow = false;
    this.clearFilter();
  }

  public filterPokemon(): void {
    if(this.pageStore.searchPokemonText.length === 0){
      this.clearFilter();
      return;
    }
    this.pokedex.filteredPokemon = this.pokedex.allPokemon.filter((pokemon:Pokemon) => pokemon.name.includes(this.pageStore.searchPokemonText));
  }

  public clearFilter(): void {
    this.pageStore.searchPokemonText = "";
    this.pokedex.filteredPokemon = [];
  }
}
