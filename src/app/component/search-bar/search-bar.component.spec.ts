import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PageStore } from 'src/app/stores/pages.store';
import { Pokedex } from 'src/app/stores/pokedex.store';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        PageStore,
        Pokedex
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
