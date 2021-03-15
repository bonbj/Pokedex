import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Pokedex } from 'src/app/stores/pokedex.store';
import { ModalService } from 'src/app/service/modal-service/modal-service.service';

@Injectable({
  providedIn: 'root'
})
export class PokedexProvider {

  constructor(
    private pokedex : Pokedex,
    private modalService: ModalService
    ) { }

  public async loadingAllPokemon():Promise<void>{
    let requests: string[] = [];
    for (let index = 1; index < 899; index++) {
      requests.push(`https://pokeapi.co/api/v2/pokemon/${index}`);
    }

    let querry = requests.map(name => fetch(name));

    try {
      Promise.all(querry)
        .then(async (responses) => {
          return responses;
        })
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(pokemons => pokemons.forEach(pokemon => this.factoryPokemon(pokemon)))
        .then(async () => {
          await this.modalService.closeModal();
        });
    }catch(error){
      await this.modalService.presentWarningModal(`Infelizmente não foi possível carregar a Pokédex`);
    }

  }

  private async factoryPokemon(responseApi:any): Promise<void> {
    let pokemon: Pokemon = new Pokemon();
    pokemon.id = responseApi.id;
    pokemon.height = responseApi.height;
    pokemon.weight = responseApi.weight;
    pokemon.name = responseApi.name;
    pokemon.generation = this.returnGeneration(responseApi.id);
    pokemon.type = responseApi.types.map((e:any) => e.type.name);
    pokemon.sprite = this.returnSprite(responseApi.sprites);

    responseApi.stats.forEach(status => {
      pokemon.stats[`${status.stat.name}`] = status.base_stat;
    });

    this.pokedex.allPokemon.push(pokemon);
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
