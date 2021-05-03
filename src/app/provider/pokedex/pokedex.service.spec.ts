import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AngularDelegate, ModalController } from '@ionic/angular';
import { Pokedex } from 'src/app/stores/pokedex.store';

import { PokedexProvider } from './pokedex.provider';

describe('PokedexProvider', () => {
  let service: PokedexProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [ 
        Pokedex,
        ModalController,
        AngularDelegate,
        HttpClient,
        HttpHandler
       ]
    });
    service = TestBed.inject(PokedexProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
