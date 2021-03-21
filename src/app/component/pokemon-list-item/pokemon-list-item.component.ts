import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss'],
})
export class PokemonListItemComponent implements OnInit {

  @Input()
  public pokemon: Pokemon;
  constructor() { }

  ngOnInit() {

  }
  public changeFavorite(): void{
    this.pokemon.isFavorite = !this.pokemon.isFavorite;
  }
}
