import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/card-collections/card-collections.component').then(
        (m) => m.CardCollectionsComponent
      ),
  },
  {
    path: 'open-deck/:id',
    loadComponent: () =>
      import('./pages/card-open/card-open.component').then(
        (m) => m.CardOpenComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
  },
  {
    path: '**',
    redirectTo: 'search',
  },
];
