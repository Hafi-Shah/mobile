import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab-route/tabs.routes').then((m) => m.routes),
  },
];
