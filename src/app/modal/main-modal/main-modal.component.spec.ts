import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Pokedex } from 'src/app/stores/pokedex.store';

import { MainModalComponent } from './main-modal.component';

describe('MainModalComponent', () => {
  let component: MainModalComponent;
  let fixture: ComponentFixture<MainModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainModalComponent ],
      imports: [IonicModule.forRoot()],
      providers : [
        Pokedex
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
