import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PageStore } from 'src/app/stores/pages.store';
import { Pokedex } from 'src/app/stores/pokedex.store';

import { FavoritePagePage } from './favorite-page.page';

describe('FavoritePagePage', () => {
  let component: FavoritePagePage;
  let fixture: ComponentFixture<FavoritePagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePagePage ],
      imports: [IonicModule.forRoot()],
      providers: [ 
        PageStore,
        Pokedex
       ]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
