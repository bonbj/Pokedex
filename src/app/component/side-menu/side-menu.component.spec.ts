import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PageStore } from 'src/app/stores/pages.store';

import { SideMenuComponent } from './side-menu.component';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuComponent ],
      imports: [IonicModule.forRoot()],
      providers : [
        PageStore,
        Router,
        Function
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
