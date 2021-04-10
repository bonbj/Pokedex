import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
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
    private pageStore:PageStore
  ) { }

  ngOnInit() {
    this.rgb = `rgb(${this.pokemon.color.r},${this.pokemon.color.g},${this.pokemon.color.b})`;
  }
  public changeFavorite(): void{
    this.pokemon.isFavorite = !this.pokemon.isFavorite;
  }

  public detailedPage(): void {
    this.pageStore.pokemonDetailedId = this.pokemon.id;
    
  }
}
