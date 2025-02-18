import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tab1',
    loadComponent: () => import('../tab1/tab1.page').then((m) => m.Tab1Page),
  },
  {
    path: 'tab2',
    loadComponent: () => import('../tab2/tab2.page').then((m) => m.Tab2Page),
  },
  {
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full',
  },
];
