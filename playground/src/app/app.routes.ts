import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home/home.component";
import {TaskListComponent} from "./tasks/task-list/task-list.component";
import {TaskEditComponent} from "./tasks/task-edit/task-edit.component";
import {TaskDetailComponent} from "./tasks/task-detail/task-detail.component";
import {ErrorComponent} from "./shared/error/error.component";

export const appRoutes: Routes = [
  {
    path: 'home',
    pathMatch: 'prefix',
    component: HomeComponent
    // loadComponent: () => import('./home/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'tasklist',
    pathMatch: 'prefix',
    component: TaskListComponent
    // loadComponent: () => import('./tasks/task-list/task-list.component').then((c) => c.TaskListComponent),
  },
  {
    path: 'taskedit',
    pathMatch: 'prefix',
    component: TaskEditComponent
    // loadComponent: () => import('./tasks/task-edit/task-edit.component').then((c) => c.TaskEditComponent),
  },
  {
    path: 'taskdetail',
    pathMatch: 'prefix',
    component: TaskDetailComponent
    // loadComponent: () => import('./tasks/task-detail/task-detail.component').then((c) => c.TaskDetailComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorComponent
    // loadComponent: () => import('./shared/error/error.component').then((c) => c.ErrorComponent),
  },
]
