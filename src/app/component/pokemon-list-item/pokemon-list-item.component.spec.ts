import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, UrlSerializer } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavoriteStore } from 'src/app/stores/favorite.store';
import { PageStore } from 'src/app/stores/pages.store';

import { PokemonListItemComponent } from './pokemon-list-item.component';

describe('PokemonListItemComponent', () => {
  let component: PokemonListItemComponent;
  let fixture: ComponentFixture<PokemonListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListItemComponent ],
      imports: [IonicModule.forRoot()],
      providers: [ 
        PageStore,
        FavoriteStore,
        UrlSerializer,
        Router,
        Function
       ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
