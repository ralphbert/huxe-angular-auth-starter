import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { LoggedInComponent } from '../general/components/logged-in/logged-in.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  component: LoggedInComponent,
  children: [{
    path: '',
    component: TodosComponent,
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class TodoRoutingModule { }
