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
  },
  {
    path: 'taskedit',
    pathMatch: 'prefix',
    component: TaskEditComponent
  },
  {
    path: 'taskdetail',
    pathMatch: 'prefix',
    component: TaskDetailComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorComponent
  },
]
