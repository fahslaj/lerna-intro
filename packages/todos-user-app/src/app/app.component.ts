import { Component } from '@angular/core';
import { Todo, TodosApi } from 'todos-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private readonly _todosApi: TodosApi = new TodosApi();

  todo: Todo = this._todosApi.getTodo();

  newTodo() {
    this.todo = this._todosApi.getTodo();
  }
}
