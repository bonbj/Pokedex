import { Component } from '@angular/core';
import { PokedexProvider } from './provider/pokedex/pokedex.provider';
import { ModalService } from './service/modal-service/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private modalService: ModalService,
    private pokedexProvider: PokedexProvider,
  ) {
    this.loadingPokedex();
  }

  private async loadingPokedex() : Promise<void> {
    await this.modalService.presentModal();

    await this.pokedexProvider.loadingAllPokemon();
  }
}
