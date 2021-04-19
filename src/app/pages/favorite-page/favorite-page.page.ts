import { Pokedex } from './../../stores/pokedex.store';
import { Pokemon } from './../../models/pokemon.model';
import { PageStore } from 'src/app/stores/pages.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.page.html',
  styleUrls: ['./favorite-page.page.scss'],
})
export class FavoritePagePage implements OnInit {

  public favoritePokemons: Pokemon[] = [];
  constructor(
    private pageStore:PageStore,
    private pokedex:Pokedex
  ) { }

  ngOnInit() {
    this.load();
  }

  ionViewWillEnter(){
    this.load();
  }
  public openSideMenu():void {
    this.pageStore.isSideMenuOpen = true;
  }

  public load():void {
    if(localStorage.getItem("favorite-pokemons")){
      const favorite: number[] = JSON.parse(localStorage.getItem("favorite-pokemons"));
      this.favoritePokemons =  this.pokedex.allPokemon.filter(pokemon => favorite.includes(pokemon.id));
    }
  }
}
