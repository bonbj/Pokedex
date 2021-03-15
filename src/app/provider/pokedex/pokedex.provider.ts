import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pokemon } from 'src/app/models/pokemon.model';
import { Pokedex } from 'src/app/stores/pokedex.store';
import { ModalService } from 'src/app/service/modal-service/modal-service.service';

@Injectable({
  providedIn: 'root'
})
export class PokedexProvider {
  private errors : any = [];
  private parsed: number = 0;

  constructor(
    private http: HttpClient,
    private pokedex : Pokedex,
    private modalService: ModalService
    ) { }

  public async loadingAllPokemon():Promise<void>{
    for (let index = 1; index < 899; index++) {
      await this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}`).toPromise()
        .then((response: any) => {
          this.factoryPokemon(response);
        }).catch((e) => {
          this.errors.push(e);
        })
    }
    this.pokedex.allPokemon.sort((pokemonA: Pokemon,pokemonB:Pokemon) => (pokemonA.id < pokemonB.id) ? -1 : 1 );
    await this.modalService.closeModal();

    if(this.errors.length > 0){
      await this.modalService.presentWarningModal(
         `Infelizmente não foi possível carregar ${this.errors.length} pokemon${this.errors.length > 1 ? 's': ''}`
      );
    }
  }

  private async factoryPokemon(responseApi:any): Promise<void> {
    let pokemon: Pokemon = new Pokemon();
    pokemon.id = responseApi.id;
    pokemon.height = responseApi.height;
    pokemon.weight = responseApi.weight;
    pokemon.name = responseApi.name;
    pokemon.generation = this.returnGeneration(responseApi.id);
    pokemon.type = responseApi.types.map(e => e.type.name);
    pokemon.sprite = this.returnSprite(responseApi.sprites);

    this.pokedex.allPokemon.push(pokemon);

    this.parsed++;
  }

  private returnGeneration(id: number): number {
    if(id < 152){
      return 1
    }

    if(id < 252){
      return 2
    }

    if(id < 387){
      return 3
    }

    if(id < 494){
      return 4
    }

    if(id < 650){
      return 5
    }

    if(id < 722){
      return 6
    }

    if(id < 810){
      return 7
    }

    return 8;
  }

  private returnSprite(sprites:any): string{
    if(sprites.other['official-artwork'].front_default){
      return sprites.other['official-artwork'].front_default;
    }

    if(sprites.other.dream_world.front_default){
      return sprites.other.dream_world.front_default;
    }

    return sprites.front_default;
  }
}
