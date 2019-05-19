import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import { TodoRoutingModule } from './todo-routing.module';
import { GeneralModule } from '../general/general.module';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    GeneralModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
