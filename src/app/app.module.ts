import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageStore } from './stores/pages.store';
import { ModalService } from './service/modal-service/modal-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Pokedex } from './stores/pokedex.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PageStore,
    ModalService,
    Pokedex
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
