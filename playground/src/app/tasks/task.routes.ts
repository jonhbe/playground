import { Routes } from '@angular/router';

export const taskRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./task-list/task-list.component').then(c => c.TaskListComponent),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./task-edit/task-edit.component').then(c => c.TaskEditComponent),
      },
      {
        path: 'detail',
        loadComponent: () =>
          import('./task-detail/task-detail.component').then(c => c.TaskDetailComponent),
      },
    ],
  },
];
