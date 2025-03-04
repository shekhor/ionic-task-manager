import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'completed-tasks',
    loadComponent: () => import('./pages/completed-tasks/completed-tasks.page').then( m => m.CompletedTasksPage)
  },
  {
    path: 'cancelled-tasks',
    loadComponent: () => import('./pages/cancelled-tasks/cancelled-tasks.page').then( m => m.CancelledTasksPage)
  }
];
