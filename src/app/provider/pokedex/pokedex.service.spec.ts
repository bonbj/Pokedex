import { TestBed } from '@angular/core/testing';

import { PokedexProvider } from './pokedex.provider';

describe('PokedexProvider', () => {
  let service: PokedexProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
