import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FavoriteStore } from 'src/app/stores/favorite.store';
import { PageStore } from 'src/app/stores/pages.store';
import { Pokedex } from 'src/app/stores/pokedex.store';

import { PokemonDetailedPage } from './pokemon-detailed.page';

describe('PokemonDetailedPage', () => {
  let component: PokemonDetailedPage;
  let fixture: ComponentFixture<PokemonDetailedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailedPage ],
      imports: [IonicModule.forRoot()],
      providers : [ 
        PageStore,
        Pokedex,
        FavoriteStore
       ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
