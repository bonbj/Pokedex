import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AngularDelegate, ModalController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { Pokedex } from './stores/pokedex.store';

describe('AppComponent', () => {

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ 
        ModalController,
        AngularDelegate,
        Pokedex,
        HttpClient,
        HttpHandler
       ]
      }).compileComponents();
      
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
  }));

});
