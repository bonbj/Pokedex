import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { FavoriteStore } from 'src/app/stores/favorite.store';
import { PageStore } from 'src/app/stores/pages.store';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss'],
})
export class PokemonListItemComponent implements OnInit {
  public rgb : string = "";

  @Input()
  public pokemon: Pokemon;
  constructor(
    private pageStore:PageStore,
    private favoriteStore: FavoriteStore
  ) { }

  ngOnInit() {
    this.pokemon.isFavorite = this.favoriteStore.isFavorite(this.pokemon.id);
    this.rgb = `rgb(${this.pokemon.color.r},${this.pokemon.color.g},${this.pokemon.color.b})`;
  }
  public changeFavorite(): void{
    this.pokemon.isFavorite = !this.pokemon.isFavorite;
    this.favoriteStore.saveFavorite(this.pokemon.isFavorite,this.pokemon.id);
  }

  public detailedPage(): void {
    this.pageStore.pokemonDetailedId = this.pokemon.id;
  }
}
