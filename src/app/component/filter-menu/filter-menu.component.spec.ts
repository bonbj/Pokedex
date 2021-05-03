import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PageStore } from 'src/app/stores/pages.store';
import { Pokedex } from 'src/app/stores/pokedex.store';

import { FilterMenuComponent } from './filter-menu.component';

describe('FilterMenuComponent', () => {
  let component: FilterMenuComponent;
  let fixture: ComponentFixture<FilterMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterMenuComponent ],
      imports: [IonicModule.forRoot()],
      providers : [ 
        PageStore,
        Pokedex
       ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
