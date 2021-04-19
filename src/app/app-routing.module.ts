import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pokemon-detailed',
    loadChildren: () => import('./pages/pokemon-detailed/pokemon-detailed.module').then( m => m.PokemonDetailedPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./pages/favorite-page/favorite-page.module').then( m => m.FavoritePagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
