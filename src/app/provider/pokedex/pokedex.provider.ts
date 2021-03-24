import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Pokedex } from 'src/app/stores/pokedex.store';
import { ModalService } from 'src/app/service/modal-service/modal-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexProvider {
  constructor(
    private pokedex: Pokedex,
    private modalService: ModalService,
    public http: HttpClient,
  ) { }

  public async loadingAllPokemon(): Promise<void> {
    if (navigator.onLine) {

      this.http.get(`https://bonbj-color-thief.herokuapp.com/pokemon-list`).toPromise()
        .then(async (response: Pokemon[]) => {
          this.pokedex.allPokemon = response;
          await this.modalService.closeModal();
          this.pokedex.showListPokemon = this.pokedex.allPokemon.slice(0,10);
          this.pokedex.hideListPokemon = this.pokedex.allPokemon.slice(10);
        }).catch(() => { this.modalBlock() });
    } else {
      this.modalBlock();
    }
  }

  private async modalBlock() {
    await this.modalService.presentWarningModal(`Infelizmente não foi possível carregar a Pokédex`);
  }
}
