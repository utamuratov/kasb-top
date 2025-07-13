import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.component'),
  },
  {
    path: 'result',
    loadComponent: () => import('./pages/result/result.component'),
  },
];
