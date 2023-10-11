import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'prefix',
    loadComponent: () => import('./home/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'tasks',
    pathMatch: 'prefix',
    loadChildren: () => import('./tasks/task.routes').then(r => r.taskRoutes),
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () => import('./shared/error/error.component').then(c => c.ErrorComponent),
  },
];
