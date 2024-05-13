import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'card-collection',
    loadComponent: () =>
      import('./pages/card-collections/card-collections.component').then(
        (m) => m.CardCollectionsComponent
      ),
  },
];
